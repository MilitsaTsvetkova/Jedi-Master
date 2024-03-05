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
import People from './People'
import Films from './Films'
import { extractId } from '../utils/extractId'

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
          {specie.people.length > 0 && (
            <Box>
              <Heading size='xs' textTransform='uppercase'>
                People
              </Heading>
              <Box pt='2' fontSize='sm'>
                <People
                  people={specie.people.map((person) =>
                    person.replace(/\D/g, '')
                  )}
                />
              </Box>
            </Box>
          )}
          {specie.films.length > 0 && (
            <Films
              label='Films'
              films={specie.films.map((film) => extractId(film))}
            />
          )}
        </Stack>
      </CardBody>
    </Card>
  )
}

export default SpecieDetails
