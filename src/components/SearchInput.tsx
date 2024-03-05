import { SearchIcon } from '@chakra-ui/icons'
import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') ?? '')

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (ref.current) {
      setSearchParams({ q: searchQuery })
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchQuery(event.target.value)
  return (
    <FormControl onSubmit={onSubmit} w='100%'>
      <InputGroup>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder='Search Star Wars movies'
          variant='filled'
          value={searchQuery}
          onChange={onChange}
        />
        <InputRightElement pointerEvents='none'>
          <SearchIcon />
        </InputRightElement>
      </InputGroup>
    </FormControl>
  )
}

export default SearchInput
