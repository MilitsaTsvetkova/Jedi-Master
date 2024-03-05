import { HStack, Spinner, Tag } from '@chakra-ui/react'
import useRelatedEntities from '../hooks/useRelatedEntities'
import { Link } from 'react-router-dom'

const Vehicles = ({ vehicles }: { vehicles: string[] }) => {
  const { data, isLoading } = useRelatedEntities('vehicles', vehicles)
  if (isLoading) return <Spinner />

  return (
    <HStack spacing={4}>
      {data.map((entity) => (
        <Tag key={entity.title} variant='solid' colorScheme='yellow'>
          <Link
            to={`${entity.url
              .replace('https://swapi.dev/api', '')
              .slice(0, -1)}`}
            key={entity.name}
          >
            {entity.name}
          </Link>
        </Tag>
      ))}
    </HStack>
  )
}

export default Vehicles
