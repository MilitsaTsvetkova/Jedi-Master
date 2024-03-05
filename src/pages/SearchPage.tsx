import { Container } from '@chakra-ui/react'
import SearchInput from '../components/SearchInput'
import Categories from '../components/Categories'

const SearchPage = () => {
  return (
    <Container maxW='container.sm' centerContent>
      <SearchInput />
      <Categories />
    </Container>
  )
}

export default SearchPage
