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
import Film from '../entities/Film'
import { getEntityDetails } from '../services/getEntitityDetails'
import People from './People'
import Planets from './Planets'
import Starships from './Starships'
import Vehicles from './Vehicles'
import Species from './Species'
import { extractId } from '../utils/extractId'

const FilmDetails = ({ film }: { film: Film }) => {
  const filmDetails = getEntityDetails(film)

  return (
    <Card>
      <CardHeader>
        <Heading size='md'>Film Details</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          {filmDetails.map(({ label, value }) => (
            <Box key={value}>
              <Heading size='xs' textTransform='uppercase'>
                {label}
              </Heading>
              <Text pt='2' fontSize='sm'>
                {value}
              </Text>
            </Box>
          ))}
          {film.characters.length > 0 && (
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Characters
              </Heading>
              <Box pt='2' fontSize='sm'>
                <People
                  people={film.characters.map((resident) =>
                    resident.replace(/\D/g, '')
                  )}
                />
              </Box>
            </Box>
          )}
          {film.planets.length > 0 && (
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Planets
              </Heading>
              <Box pt='2' fontSize='sm'>
                <Planets
                  planets={film.planets.map((planet) => extractId(planet))}
                />
              </Box>
            </Box>
          )}
          {film.starships.length > 0 && (
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Starships
              </Heading>
              <Box pt='2' fontSize='sm'>
                <Starships
                  starships={film.starships.map((starship) =>
                    extractId(starship)
                  )}
                />
              </Box>
            </Box>
          )}
          {film.vehicles.length > 0 && (
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Vehicles
              </Heading>
              <Box pt='2' fontSize='sm'>
                <Vehicles
                  vehicles={film.vehicles.map((vehicle) => extractId(vehicle))}
                />
              </Box>
            </Box>
          )}
          {film.species.length > 0 && (
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Species
              </Heading>
              <Box pt='2' fontSize='sm'>
                <Species
                  species={film.species.map((specie) => extractId(specie))}
                />
              </Box>
            </Box>
          )}
        </Stack>
      </CardBody>
    </Card>
  )
}

export default FilmDetails
