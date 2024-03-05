import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react'
import Person from '../entities/Person'
import usePlanet from '../hooks/usePlanet'
import Appearance from './Appearance'
import Vehicles from './Vehicles'
import Species from './Species'

const PersonDetails = ({ person }: { person: Person }) => {
  const { data: planet } = usePlanet(person.homeworld.replace(/\D/g, ''))
  console.log(person.species)
  const personDetails = [
    { label: 'Name', value: person.name },
    { label: 'Birth Year', value: person.birth_year },
    { label: 'Gender', value: person.gender },
    { label: 'Hair Color', value: person.hair_color },
    { label: 'Height', value: person.height },
    { label: 'Mass', value: person.mass },
    { label: 'Skin Color', value: person.skin_color },
    { label: 'Home World', value: planet?.name },
  ]
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
                Appearance
              </Heading>
              <Box pt='2' fontSize='sm'>
                <Appearance
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
                  species={person.species.map((vehicle) =>
                    vehicle.replace(/\D/g, '')
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
