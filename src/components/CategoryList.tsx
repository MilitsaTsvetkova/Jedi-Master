import { Box } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import useSearch from '../hooks/useSearch'
import { Category } from './Categories'
import CategoryDivider from './CategoryDivider'

const CategoryList = ({ category }: { category: Category }) => {
  console.log(category)
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('q') ?? ''
  const { data } = useSearch(category.value, searchQuery)
  return (
    <Box p={4}>
      <CategoryDivider key={category.value} category={category.label} />
      {data?.results.map((item) => (
        <Box key={item.name} paddingLeft={5}>{item.name}</Box>
      ))}
    </Box>
  )
}

export default CategoryList
