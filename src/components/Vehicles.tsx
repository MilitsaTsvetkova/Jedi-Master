import { HStack, Spinner, Tag } from '@chakra-ui/react'
import useRelatedEntities from '../hooks/useRelatedEntities'
import { Link } from 'react-router-dom'
import { getRedirectLink } from '../utils/getRedirectLink'
import Vehicle from '../entities/Vehicle'

const Vehicles = ({ vehicles }: { vehicles: string[] }) => {
  const { data, isLoading } = useRelatedEntities('vehicles', vehicles)
  if (isLoading) return <Spinner />

  return (
    <HStack spacing={4}>
      {data.map((entity: Vehicle) => (
        <Tag key={entity.name} variant='solid' colorScheme='yellow'>
          <Link to={getRedirectLink(entity.url)} key={entity.name}>
            {entity.name}
          </Link>
        </Tag>
      ))}
    </HStack>
  )
}

export default Vehicles
