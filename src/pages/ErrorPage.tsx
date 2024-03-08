import { Image, Center } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import error from '../assets/error.png'

function ErrorPage() {
  return (
    <>
      <NavBar />
      <Center>
        <Image
          src={error}
          boxSize='700px'
          objectFit='cover'
          borderRadius={5}
        ></Image>
      </Center>
    </>
  )
}

export default ErrorPage
