import React, { useState } from 'react'
import { SAMPLE_DRINKS, CATEGORY_EMOJIS } from '@lib/constants'
import { motion } from 'framer-motion'
import { Heart, Search } from 'lucide-react'

const DrinkDiscovery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  const filteredDrinks = SAMPLE_DRINKS.filter((drink) => {
    const matchCategory = selectedCategory === 'all' || drink.category === selectedCategory
    const matchSearch = drink.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  const toggleFavorite = (drinkId: string) => {
    setFavorites((prev) => {
      const newFavs = new Set(prev)
      if (newFavs.has(drinkId)) {
        newFavs.delete(drinkId)
      } else {
        newFavs.add(drinkId)
      }
      return newFavs
    })
  }

  const categories = ['all', ...new Set(SAMPLE_DRINKS.map((d) => d.category))]

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-dark-50">Discover Drinks 🍷</h1>
        <p className="text-dark-300">Explore our curated collection of alcoholic beverages</p>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-3.5 text-dark-400" size={20} />
        <input
          type="text"
          placeholder="Search drinks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-dark-50 placeholder-dark-400 focus:border-primary-500 focus:outline-none"
        />
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? 'bg-primary-600 text-white'
                : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
            }`}
          >
            {cat === 'all' ? '🌍 All' : `${CATEGORY_EMOJIS[cat as keyof typeof CATEGORY_EMOJIS]} ${cat}`}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDrinks.map((drink, index) => (
          <motion.div
            key={`${drink.name}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="card-interactive group relative"
          >
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => toggleFavorite(`${drink.name}-${index}`)}
                className={`p-2 rounded-lg transition-all ${
                  favorites.has(`${drink.name}-${index}`)
                    ? 'bg-red-600 text-white'
                    : 'bg-dark-700 text-dark-300 group-hover:text-red-400'
                }`}
              >
                <Heart size={20} fill={favorites.has(`${drink.name}-${index}`) ? 'currentColor' : 'none'} />
              </button>
            </div>

            <div className="text-4xl mb-3">
              {CATEGORY_EMOJIS[drink.category as keyof typeof CATEGORY_EMOJIS]}
            </div>

            <h3 className="text-xl font-bold text-dark-50 mb-1">{drink.name}</h3>
            <p className="text-dark-400 text-sm mb-4">{drink.brand || 'Unknown Brand'}</p>

            <div className="space-y-2 mb-4 text-sm">
              <div className="flex justify-between">
                <span className="text-dark-400">ABV</span>
                <span className="text-dark-200 font-medium">{drink.abv}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-400">Volume</span>
                <span className="text-dark-200 font-medium">{drink.volume}ml</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-400">Origin</span>
                <span className="text-dark-200 font-medium">{drink.country || 'N/A'}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-dark-700">
              <button className="btn-primary w-full text-sm py-2">View Details</button>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredDrinks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-dark-400 text-lg">No drinks found matching your criteria</p>
        </div>
      )}
    </div>
  )
}

export default DrinkDiscovery
