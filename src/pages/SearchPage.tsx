import { Container } from '@chakra-ui/react'
import SearchInput from '../components/SearchInput'

const SearchPage = () => {
  return (
    <Container maxW='container.sm' centerContent>
      <SearchInput />
    </Container>
  )
}

export default SearchPage
