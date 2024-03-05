import { Box, Container } from '@chakra-ui/react'
import SearchInput from '../components/SearchInput'
import Categories, { categories } from '../components/Categories'
import CategoryDivider from '../components/CategoryDivider'

const SearchPage = () => {
  return (
    <>
      <SearchInput />
      <Categories />
      <Box>
        {categories.map((category) => (
          <CategoryDivider key={category.value} category={category.label} />
        ))}
      </Box>
    </>
  )
}

export default SearchPage
