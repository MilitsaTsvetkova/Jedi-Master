import { Box } from '@chakra-ui/react'
import Categories, { categories } from '../components/Categories'
import CategoryList from '../components/CategoryList'
import SearchInput from '../components/SearchInput'

const SearchPage = () => {
  return (
    <>
      <Box>
        <SearchInput />
        <Categories />
      </Box>
      <Box>
        {categories.map((category) => (
          <CategoryList key={category.value} category={category} />
        ))}
      </Box>
    </>
  )
}

export default SearchPage
