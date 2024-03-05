import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from '@chakra-ui/react';
import Film from '../entities/Film';

const FilmDetails = ({film}:{film:Film}) => {

    const filmDetails=[
        {label:'Name',value:film.title},
        {label:'director',value:film.director},
        {label:'description',value:film.opening_crawl},
        {label:'producer',value:film.producer},
        {label:'release_date',value:film.release_date},
    ]
  return (
    <Card>
    <CardHeader>
      <Heading size='md'>Film Details</Heading>
    </CardHeader>
  
    <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
      {filmDetails.map(({label, value})=>(
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
