import { supabase } from './supabase'
import { ConsumptionTrend, CategoryBreakdown } from '@types/index'

export const analyticsService = {
  async getWeeklyTrends(userId: string) {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - 7)

    const { data, error } = await supabase
      .from('drink_logs')
      .select('consumed_at, volume, abv, cost')
      .eq('user_id', userId)
      .gte('consumed_at', startDate.toISOString())
      .order('consumed_at', { ascending: true })

    if (error) return { data: null, error }

    const trends: ConsumptionTrend[] = []
    const dailyMap = new Map<string, ConsumptionTrend>()

    data?.forEach((log) => {
      const date = new Date(log.consumed_at).toISOString().split('T')[0]
      if (!dailyMap.has(date)) {
        dailyMap.set(date, { date, units: 0, spent: 0 })
      }
      const trend = dailyMap.get(date)!
      trend.units += (log.volume * log.abv) / 1000
      trend.spent += log.cost ?? 0
    })

    return { data: Array.from(dailyMap.values()), error: null }
  },

  async getMonthlyTrends(userId: string) {
    const startDate = new Date()
    startDate.setDate(1)

    const { data, error } = await supabase
      .from('drink_logs')
      .select('consumed_at, volume, abv, cost')
      .eq('user_id', userId)
      .gte('consumed_at', startDate.toISOString())
      .order('consumed_at', { ascending: true })

    if (error) return { data: null, error }

    const trends: ConsumptionTrend[] = []
    const weeklyMap = new Map<number, ConsumptionTrend>()

    data?.forEach((log) => {
      const date = new Date(log.consumed_at)
      const week = Math.floor((date.getDate() - 1) / 7)
      const weekStart = new Date(date)
      weekStart.setDate(weekStart.getDate() - ((date.getDay() + 6) % 7))

      const weekKey = week
      if (!weeklyMap.has(weekKey)) {
        weeklyMap.set(weekKey, {
          date: weekStart.toISOString(),
          units: 0,
          spent: 0,
        })
      }
      const trend = weeklyMap.get(weekKey)!
      trend.units += (log.volume * log.abv) / 1000
      trend.spent += log.cost ?? 0
    })

    return { data: Array.from(weeklyMap.values()), error: null }
  },

  async getCategoryBreakdown(userId: string, days: number = 30) {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - days)

    const { data, error } = await supabase
      .from('drink_logs')
      .select('volume, abv, cost, drinks(category)')
      .eq('user_id', userId)
      .gte('consumed_at', startDate.toISOString())

    if (error) return { data: null, error }

    const categoryMap = new Map<string, { units: number; spent: number }>(
    )

    data?.forEach((log) => {
      const category = log.drinks?.category || 'unknown'
      if (!categoryMap.has(category)) {
        categoryMap.set(category, { units: 0, spent: 0 })
      }
      const stats = categoryMap.get(category)!
      stats.units += (log.volume * log.abv) / 1000
      stats.spent += log.cost ?? 0
    })

    const totalUnits = Array.from(categoryMap.values()).reduce(
      (sum, stats) => sum + stats.units,
      0,
    )

    const breakdown: CategoryBreakdown[] = Array.from(categoryMap.entries()).map(
      ([category, stats]) => ({
        category: category as any,
        units: stats.units,
        percentage: totalUnits > 0 ? (stats.units / totalUnits) * 100 : 0,
        spent: stats.spent,
      }),
    )

    return { data: breakdown, error: null }
  },
}
