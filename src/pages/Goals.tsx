import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Target, Zap, TrendingUp } from 'lucide-react'

const Goals: React.FC = () => {
  const [goals, setGoals] = useState([
    {
      id: 1,
      name: 'Weekly Units Goal',
      target: 14,
      current: 11.8,
      period: 'weekly',
      icon: '🍺',
      color: 'from-blue-600 to-blue-800',
    },
    {
      id: 2,
      name: 'Monthly Spending',
      target: 200,
      current: 184,
      period: 'monthly',
      icon: '💷',
      color: 'from-green-600 to-green-800',
    },
    {
      id: 3,
      name: 'Alcohol-Free Days',
      target: 3,
      current: 1,
      period: 'weekly',
      icon: '🌱',
      color: 'from-emerald-600 to-emerald-800',
    },
  ])

  const achievements = [
    { id: 1, name: 'First Drink', description: 'Logged your first drink', icon: '🎉', unlocked: true },
    { id: 2, name: '7-Day Streak', description: 'Logged drinks for 7 consecutive days', icon: '🔥', unlocked: true },
    { id: 3, name: 'Week Warrior', description: 'Stayed within goal for 4 weeks', icon: '⚔️', unlocked: false },
    { id: 4, name: 'Cocktail Master', description: 'Tried 20 different cocktails', icon: '🍹', unlocked: false },
    { id: 5, name: 'Budget Boss', description: 'Tracked spending for a month', icon: '💰', unlocked: true },
    { id: 6, name: 'Collector', description: 'Saved 10 favorite drinks', icon: '⭐', unlocked: false },
  ]

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100)
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-dark-50">Your Goals 🎯</h1>
        <p className="text-dark-300">Set and track your personal drinking goals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {goals.map((goal, index) => {
          const percentage = getProgressPercentage(goal.current, goal.target)
          const isCompleted = goal.current >= goal.target

          return (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`card bg-gradient-to-br ${goal.color} relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="text-4xl mb-3">{goal.icon}</div>

                <h3 className="text-xl font-bold text-white mb-1">{goal.name}</h3>
                <p className="text-white/70 text-sm mb-4 capitalize">{goal.period}</p>

                <div className="mb-4 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-bold">{goal.current}</span>
                    <span className="text-white/70 text-sm">/ {goal.target}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                      className="h-2 rounded-full bg-white"
                    ></motion.div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/80 text-sm">{Math.round(percentage)}%</span>
                  {isCompleted && <span className="text-lg">✅</span>}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="card"
      >
        <h2 className="text-2xl font-bold text-dark-50 mb-6 flex items-center gap-2">
          <Trophy size={24} className="text-accent-400" />
          Achievements
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              className={`p-4 rounded-lg border-2 transition-all ${
                achievement.unlocked
                  ? 'bg-dark-800 border-primary-600/50 cursor-pointer hover:border-primary-400'
                  : 'bg-dark-800/50 border-dark-700 opacity-60'
              }`}
            >
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <h4 className="font-bold text-dark-50 text-sm mb-1">{achievement.name}</h4>
              <p className="text-dark-400 text-xs">{achievement.description}</p>
              {achievement.unlocked && <div className="mt-2 text-xs text-primary-400 font-medium">✓ Unlocked</div>}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="card bg-gradient-to-br from-primary-900/30 to-accent-900/30 border-primary-700/50"
      >
        <h2 className="text-2xl font-bold text-dark-50 mb-4 flex items-center gap-2">
          <Zap size={24} className="text-accent-400" />
          Pro Tips
        </h2>

        <ul className="space-y-3 text-dark-200 text-sm">
          <li className="flex gap-3">
            <span>💡</span>
            <span>Set realistic goals - UK guidelines recommend 14 units per week for both men and women</span>
          </li>
          <li className="flex gap-3">
            <span>📊</span>
            <span>Track your spending to stay mindful of costs - small expenses add up quickly</span>
          </li>
          <li className="flex gap-3">
            <span>🎯</span>
            <span>Include alcohol-free days in your weekly routine for better health</span>
          </li>
          <li className="flex gap-3">
            <span>🔄</span>
            <span>Review your progress weekly and adjust goals as needed</span>
          </li>
        </ul>
      </motion.div>
    </div>
  )
}

export default Goals
