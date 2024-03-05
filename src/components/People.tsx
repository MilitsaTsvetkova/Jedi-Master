import { HStack, Spinner, Tag } from '@chakra-ui/react'
import useRelatedEntities from '../hooks/useRelatedEntities'
import { Link } from 'react-router-dom'
import { getRedirectLink } from '../utils/getRedirectLink'
import Specie from '../entities/Specie'

const People = ({ people }: { people: string[] }) => {
  const { data, isLoading } = useRelatedEntities('people', people)
  if (isLoading) return <Spinner />

  return (
    <HStack spacing={4}>
      {data.map((entity: Specie) => (
        <Tag key={entity.name} variant='solid' colorScheme='yellow'>
          <Link to={getRedirectLink(entity.url)} key={entity.name}>
            {entity.name}
          </Link>
        </Tag>
      ))}
    </HStack>
  )
}

export default People
