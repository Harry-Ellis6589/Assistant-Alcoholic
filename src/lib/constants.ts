export const ALCOHOL_UNIT_FORMULA = (volumeml: number, abv: number) => {
  return (volumeml * abv) / 1000
}

export const DRINK_CATEGORIES = [
  'beer',
  'lager',
  'ipa',
  'stout',
  'cider',
  'wine',
  'champagne',
  'prosecco',
  'whisky',
  'bourbon',
  'vodka',
  'gin',
  'rum',
  'tequila',
  'brandy',
  'cocktails',
  'liqueurs',
  'custom',
] as const

export const CATEGORY_EMOJIS: Record<string, string> = {
  beer: '🍺',
  lager: '🍻',
  ipa: '🍺',
  stout: '🍺',
  cider: '🍎',
  wine: '🍷',
  champagne: '🥂',
  prosecco: '🥂',
  whisky: '🥃',
  bourbon: '🥃',
  vodka: '🍸',
  gin: '🍸',
  rum: '🍹',
  tequila: '🍹',
  brandy: '🥃',
  cocktails: '🍹',
  liqueurs: '🍶',
  custom: '🍾',
}

export const RECOMMENDED_WEEKLY_UNITS = {
  male: 14,
  female: 14,
}

export const SAFE_ZONE_UNITS = 14
export const WARNING_ZONE_UNITS = 28
export const HIGH_ZONE_UNITS = 28

export const THEME_COLORS = {
  primary: '#9d5aff',
  accent: '#ec7f3d',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  dark: '#0a0a0a',
  light: '#f8f7ff',
}
