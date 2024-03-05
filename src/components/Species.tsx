import { HStack, Spinner, Tag } from '@chakra-ui/react'
import useRelatedEntities from '../hooks/useRelatedEntities'
import { Link } from 'react-router-dom'
import { getRedirectLink } from '../utils/getRedirectLink'

const Species = ({ species }: { species: string[] }) => {
  const { data, isLoading } = useRelatedEntities('species', species)
  if (isLoading) return <Spinner />

  return (
    <HStack spacing={4}>
      {data.map((entity) => (
        <Tag key={entity.name} variant='solid' colorScheme='yellow'>
          <Link to={getRedirectLink(entity.url)} key={entity.name}>
            {entity.name}
          </Link>
        </Tag>
      ))}
    </HStack>
  )
}

export default Species
