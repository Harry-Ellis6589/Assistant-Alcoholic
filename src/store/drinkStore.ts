import { create } from 'zustand'
import { DrinkLog, Drink, DailyStats } from '@types/index'

interface DrinkStore {
  drinks: Drink[]
  drinkLogs: DrinkLog[]
  dailyStats: DailyStats | null
  setDrinks: (drinks: Drink[]) => void
  addDrinkLog: (log: DrinkLog) => void
  removeDrinkLog: (logId: string) => void
  setDailyStats: (stats: DailyStats) => void
  getDrinksByCategory: (category: string) => Drink[]
}

export const useDrinkStore = create<DrinkStore>((set, get) => ({
  drinks: [],
  drinkLogs: [],
  dailyStats: null,
  setDrinks: (drinks) => set({ drinks }),
  addDrinkLog: (log) =>
    set((state) => ({
      drinkLogs: [log, ...state.drinkLogs],
    })),
  removeDrinkLog: (logId) =>
    set((state) => ({
      drinkLogs: state.drinkLogs.filter((log) => log.id !== logId),
    })),
  setDailyStats: (stats) => set({ dailyStats: stats }),
  getDrinksByCategory: (category) => {
    return get().drinks.filter((drink) => drink.category === category)
  },
}))
