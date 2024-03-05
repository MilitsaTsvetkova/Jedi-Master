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
        </Stack>
      </CardBody>
    </Card>
  )
}

export default FilmDetails
