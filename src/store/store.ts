import { create } from 'zustand'
import { categories } from '../common/types'

interface Category {
  name: string
  count: number
}

interface CategoryStore {
  selectedCategory: Category
  setSelectedCategory: (name: string) => void
  categories: Category[]
  setCategoryCount: (name: string, count: number) => void
}

const useCategoryStore = create<CategoryStore>((set) => ({
  selectedCategory: {
    name: categories[0].value,
    count: 0,
  },
  categories: categories.map((cat) => {
    return { name: cat.value, count: 0 }
  }),
  setSelectedCategory: (name) =>
    set((store) => ({ selectedCategory: { ...store.selectedCategory, name } })),
  setCategoryCount: (name: string, count: number) =>
    set((store) => {
      const category = store.categories.find((cat) => cat.name === name)
      if (category) category.count = count
      return { categories: { ...store.categories, category } }
    }),
}))

export default useCategoryStore
