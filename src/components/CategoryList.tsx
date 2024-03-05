import { Box } from '@chakra-ui/react'
import { Link, useSearchParams } from 'react-router-dom'
import useSearch from '../hooks/useSearch'
import { Category } from './Categories'
import CategoryDivider from './CategoryDivider'

const CategoryList = ({ category }: { category: Category }) => {
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('q') ?? ''
  const { data } = useSearch(category.value, searchQuery)
  return (
    <Box p={4}>
      <CategoryDivider key={category.value} category={category.label} />
      {data?.results.map((item) => (
        <Box key={item.name} paddingLeft={5}>
          <Link
            to={`/${item.url
              .replace('https://swapi.dev/api', '')
              .slice(0, -1)}`}
          >
            {item.name}
          </Link>
        </Box>
      ))}
    </Box>
  )
}

export default CategoryList
