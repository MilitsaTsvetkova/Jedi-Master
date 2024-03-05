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
        </Stack>
      </CardBody>
    </Card>
  )
}

export default VehicleDetails
