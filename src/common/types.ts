export interface Category {
  label: string
  value: string
}

export const categories: Category[] = [
  { label: 'All', value: 'all' },
  { label: 'People', value: 'people' },
  { label: 'Planets', value: 'planets' },
  { label: 'Starships', value: 'starships' },
  { label: 'Vehicles', value: 'vehicles' },
]
