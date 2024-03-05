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
        </Stack>
      </CardBody>
    </Card>
  )
}

export default PlanetDetails
