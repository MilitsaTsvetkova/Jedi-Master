import { Box } from '@chakra-ui/react'
import { categories } from '../common/types'
import Categories from './Categories'
import CategoryList from './CategoryList'

const ResultList = () => {
  return (
    <Box>
      <Categories />
      <Box>
        {categories
          .filter((category) => category.value !== 'all')
          .map((category) => (
            <CategoryList key={category.value} category={category} />
          ))}
      </Box>
    </Box>
  )
}

export default ResultList
