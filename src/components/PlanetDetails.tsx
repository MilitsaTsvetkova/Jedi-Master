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
import Planet from '../entities/Planet'
import { getEntityDetails } from '../services/getEntitityDetails'
import Films from './Films'
import People from './People'
import { extractId } from '../utils/extractId'

const PlanetDetails = ({ planet }: { planet: Planet }) => {
  const planetDetails = getEntityDetails(planet)

  return (
    <Card>
      <CardHeader>
        <Heading size='md'>Planet Details</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          {planetDetails.map(({ label, value }) => (
            <Box key={value}>
              <Heading size='xs' textTransform='uppercase'>
                {label}
              </Heading>
              <Text pt='2' fontSize='sm'>
                {value}
              </Text>
            </Box>
          ))}
          {planet.films.length > 0 && (
            <Films
              label='Films'
              films={planet.films.map((film) => extractId(film))}
            />
          )}
          {planet.residents.length > 0 && (
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Residents
              </Heading>
              <Box pt='2' fontSize='sm'>
                <People
                  people={planet.residents.map((resident) =>
                    extractId(resident)
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

export default PlanetDetails
