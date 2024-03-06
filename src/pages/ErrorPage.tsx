import { Box } from '@chakra-ui/react'
import NavBar from '../components/NavBar'

function ErrorPage() {
  return (
    <>
      <NavBar />
      <Box
        backgroundImage="url('src/assets/error.png')"
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        backgroundSize='cover'
        h='100vh'
      />
    </>
  )
}

export default ErrorPage
