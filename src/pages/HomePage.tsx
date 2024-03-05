import { Center, Container } from '@chakra-ui/react'
import SearchInput from '../components/SearchInput'

function HomePage() {
  return (
    <Container maxW='container.sm' centerContent>
      <Center w='100%' h='100vh'>
        <SearchInput />
      </Center>
    </Container>
  )
}

export default HomePage