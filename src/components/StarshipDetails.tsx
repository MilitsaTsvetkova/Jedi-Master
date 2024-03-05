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
import Starship from '../entities/Starship'
import { getEntityDetails } from '../services/getEntitityDetails'
import Films from './Films'

const StarshipDetails = ({ starship }: { starship: Starship }) => {
  const starshipDetails = getEntityDetails(starship)

  return (
    <Card>
      <CardHeader>
        <Heading size='md'>Starship Details</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          {starshipDetails.map(({ label, value }) => (
            <Box key={value}>
              <Heading size='xs' textTransform='uppercase'>
                {label}
              </Heading>
              <Text pt='2' fontSize='sm'>
                {value}
              </Text>
            </Box>
          ))}
          {starship.films.length > 0 && (
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                Films
              </Heading>
              <Box pt='2' fontSize='sm'>
                <Films
                  films={starship.films.map((film) => film.replace(/\D/g, ''))}
                />
              </Box>
            </Box>
          )}
        </Stack>
      </CardBody>
    </Card>
  )
}

export default StarshipDetails
