import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'

const SearchInput = () => {
  return (
    <InputGroup>
      <Input
        borderRadius={20}
        placeholder='Search Star Wars movies'
        variant='filled'
      />
      <InputRightElement pointerEvents='none'>
        <SearchIcon />
      </InputRightElement>
    </InputGroup>
  )
}

export default SearchInput
