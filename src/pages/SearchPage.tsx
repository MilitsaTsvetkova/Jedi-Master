import { Box } from '@chakra-ui/react'
import Categories, { categories } from '../components/Categories'
import CategoryDivider from '../components/CategoryDivider'
import SearchInput from '../components/SearchInput'

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
