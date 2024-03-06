import { Box, Divider } from '@chakra-ui/react'
import Categories, { categories } from '../components/Categories'
import CategoryList from '../components/CategoryList'
import NavBar from '../components/NavBar'

const SearchPage = () => {
  return (
    <>
      <NavBar />
      <Divider />
      <Box>
        <Categories />
        <Box>
          {categories.map((category) => (
            <CategoryList key={category.value} category={category} />
          ))}
        </Box>
      </Box>
    </>
  )
}

export default SearchPage
