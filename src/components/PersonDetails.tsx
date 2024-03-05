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

const PersonDetails = ({ person }: { person: Person }) => {
  const { data: planet } = usePlanet(person.homeworld.replace(/\D/g, ''))

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
        </Stack>
      </CardBody>
    </Card>
  )
}

export default PersonDetails
