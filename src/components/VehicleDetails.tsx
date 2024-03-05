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
import Vehicle from '../entities/Vehicle'
import { getEntityDetails } from '../services/getEntitityDetails'
import People from './People'
import Films from './Films'

const VehicleDetails = ({ vehicle }: { vehicle: Vehicle }) => {
  const vehicleDetails = getEntityDetails(vehicle)

  return (
    <Card>
      <CardHeader>
        <Heading size='md'>Vehicle Details</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          {vehicleDetails.map(({ label, value }) => (
            <Box key={value}>
              <Heading size='xs' textTransform='uppercase'>
                {label}
              </Heading>
              <Text pt='2' fontSize='sm'>
                {value}
              </Text>
            </Box>
          ))}
          {vehicle.pilots.length > 0 && (
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Pilots
              </Heading>
              <Box pt='2' fontSize='sm'>
                <People
                  people={vehicle.pilots.map((pilot) =>
                    pilot.replace(/\D/g, '')
                  )}
                />
              </Box>
            </Box>
          )}
          {vehicle.films.length > 0 && (
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Films
              </Heading>
              <Box pt='2' fontSize='sm'>
                <Films
                  films={vehicle.films.map((film) => film.replace(/\D/g, ''))}
                />
              </Box>
            </Box>
          )}
        </Stack>
      </CardBody>
    </Card>
  )
}

export default VehicleDetails
