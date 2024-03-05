import { Box, Center, Container } from '@chakra-ui/react'
import SearchInput from '../components/SearchInput'

function HomePage() {
  return (
    <Container maxW='container.sm' centerContent>
      <Center w='100%' h='100vh'>
        <Box w='100%'>
        <SearchInput />
        </Box>
      </Center>
    </Container>
  )
}

export default HomePage
