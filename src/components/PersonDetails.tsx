import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Tag,
  Text,
} from '@chakra-ui/react'
import Person from '../entities/Person'
import usePlanet from '../hooks/usePlanet'
import Films from './Films'
import Vehicles from './Vehicles'
import Species from './Species'
import { getRedirectLink } from '../utils/getRedirectLink'
import { Link } from 'react-router-dom'
import { getEntityDetails } from '../services/getEntitityDetails'
import Starships from './Starships'

const PersonDetails = ({ person }: { person: Person }) => {
  const { data: planet } = usePlanet(person.homeworld.replace(/\D/g, ''))

  const personDetails = getEntityDetails(person)

  return (
    <Card>
      <CardHeader>
        <Heading size='md'>Character details</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          {personDetails.map(({ label, value }) => (
            <Box key={value}>
              <Heading size='xs' textTransform='uppercase'>
                {label}
              </Heading>
              <Text pt='2' fontSize='sm'>
                {value}
              </Text>
            </Box>
          ))}
          {person.films.length > 0 && (
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Home World
              </Heading>
              <Box pt='2' fontSize='sm'>
                <Tag variant='solid' colorScheme='yellow'>
                  <Link to={getRedirectLink(person.homeworld)}>
                    {planet?.name}
                  </Link>
                </Tag>
              </Box>
            </Box>
          )}
          {person.films.length > 0 && (
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Appearance
              </Heading>
              <Box pt='2' fontSize='sm'>
                <Films
                  films={person.films.map((film) => film.replace(/\D/g, ''))}
                />
              </Box>
            </Box>
          )}
          {person.vehicles.length > 0 && (
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Vehicles
              </Heading>
              <Box pt='2' fontSize='sm'>
                <Vehicles
                  vehicles={person.vehicles.map((vehicle) =>
                    vehicle.replace(/\D/g, '')
                  )}
                />
              </Box>
            </Box>
          )}
          {person.species.length > 0 && (
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Species
              </Heading>
              <Box pt='2' fontSize='sm'>
                <Species
                  species={person.species.map((specie) =>
                    specie.replace(/\D/g, '')
                  )}
                />
              </Box>
            </Box>
          )}
          {person.starships.length > 0 && (
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Starships
              </Heading>
              <Box pt='2' fontSize='sm'>
                <Starships
                  starships={person.starships.map((starship) =>
                    starship.replace(/\D/g, '')
                  )}
                />
              </Box>
            </Box>
          )}
        </Stack>
      </CardBody>
    </Card>
  )
}

export default PersonDetails
