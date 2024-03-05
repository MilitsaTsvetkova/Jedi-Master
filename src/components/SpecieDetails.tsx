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
import Specie from '../entities/Specie'
import { getEntityDetails } from '../services/getEntitityDetails'

const SpecieDetails = ({ specie }: { specie: Specie }) => {
  const specieDetails = getEntityDetails(specie)

  return (
    <Card>
      <CardHeader>
        <Heading size='md'>Specie Details</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          {specieDetails.map(({ label, value }) => (
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

export default SpecieDetails