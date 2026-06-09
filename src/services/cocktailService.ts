import { supabase } from './supabase'
import { Cocktail } from '@types/index'

export const cocktailService = {
  async getAllCocktails() {
    const { data, error } = await supabase.from('cocktails').select('*')
    return { data, error }
  },

  async getCocktailsBySpirit(spirit: string) {
    const { data, error } = await supabase
      .from('cocktails')
      .select('*')
      .contains('spirits', [spirit])
    return { data, error }
  },

  async searchCocktails(query: string) {
    const { data, error } = await supabase
      .from('cocktails')
      .select('*')
      .ilike('name', `%${query}%`)
    return { data, error }
  },

  async getCocktail(id: string) {
    const { data, error } = await supabase
      .from('cocktails')
      .select('*')
      .eq('id', id)
      .single()
    return { data, error }
  },

  async saveFavourite(userId: string, cocktailId: string) {
    const { error } = await supabase.from('favourites').insert([
      {
        user_id: userId,
        cocktail_id: cocktailId,
        type: 'cocktail',
      },
    ])
    return { error }
  },

  async removeFavourite(userId: string, cocktailId: string) {
    const { error } = await supabase
      .from('favourites')
      .delete()
      .eq('user_id', userId)
      .eq('cocktail_id', cocktailId)
    return { error }
  },
}
