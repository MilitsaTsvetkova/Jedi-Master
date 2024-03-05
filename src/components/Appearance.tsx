import { HStack, Spinner, Tag } from '@chakra-ui/react'
import useFilms from '../hooks/useFilms'
import { Link } from 'react-router-dom'

const Appearance = ({ films }: { films: string[] }) => {
  const { data, isLoading } = useFilms(films)
  if (isLoading) return <Spinner />

  return (
    <HStack spacing={4}>
      {data.map((film) => (
        <Tag key={film.title} variant='solid' colorScheme='yellow'>
          <Link
            to={`${film.url.replace('https://swapi.dev/api', '').slice(0, -1)}`}
            key={film.title}
          >
            {film.title}
          </Link>
        </Tag>
      ))}
    </HStack>
  )
}

export default Appearance
