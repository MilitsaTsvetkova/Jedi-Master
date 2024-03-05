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

const SpecieDetails = ({ specie }: { specie: Specie }) => {
  const specieDetails = [
    { label: 'Name', value: specie.name },
    { label: 'classification', value: specie.classification },
    { label: 'designation', value: specie.designation },
    { label: 'average_height', value: specie.average_height },
    { label: 'skin_colors', value: specie.skin_colors },
    { label: 'hair_colors', value: specie.hair_colors },
    { label: 'eye_colors', value: specie.eye_colors },
    { label: 'average_lifespan', value: specie.average_lifespan },
    { label: 'language', value: specie.language },
  ]
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
