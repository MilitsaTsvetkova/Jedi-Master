import { HStack, Spinner, Tag } from '@chakra-ui/react'
import useRelatedEntities from '../hooks/useRelatedEntities'
import { Link } from 'react-router-dom'
import { getRedirectLink } from '../utils/getRedirectLink'

const Appearance = ({ films }: { films: string[] }) => {
  const { data, isLoading } = useRelatedEntities('films', films)
  if (isLoading) return <Spinner />

  return (
    <HStack spacing={4}>
      {data.map((film) => (
        <Tag key={film.title} variant='solid' colorScheme='yellow'>
          <Link to={getRedirectLink(film.url)} key={film.title}>
            {film.title}
          </Link>
        </Tag>
      ))}
    </HStack>
  )
}

export default Appearance
