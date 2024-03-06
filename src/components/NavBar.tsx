import { HStack, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import SearchInput from './SearchInput'
import logo from '../assets/Logo/logo.webp'

const NavBar = () => {
  return (
    <HStack padding='10px'>
      <Link to='/'>
        <Image
          src={logo}
          boxSize='50px'
          objectFit='cover'
          borderRadius={5}
        ></Image>
      </Link>
      <SearchInput />
    </HStack>
  )
}

export default NavBar
