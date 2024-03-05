import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from '@chakra-ui/react';
import Vehicle from '../entities/Vehicle';

const VehicleDetails = ({vehicle}:{vehicle:Vehicle}) => {

    const vehicleDetails=[
        {label:'Name',value:vehicle.name},
        {label:'cargo_capacity',value:vehicle.cargo_capacity},
        {label:'consumables',value:vehicle.consumables},
        {label:'cost_in_credits',value:vehicle.cost_in_credits},
        {label:'crew',value:vehicle.crew},
        {label:'length',value:vehicle.length},
        {label:'manufacturer',value:vehicle.manufacturer},
        {label:'max_atmosphering_speed',value:vehicle.max_atmosphering_speed},
        {label:'model',value:vehicle.model},
        {label:'passengers',value:vehicle.passengers},
        {label:'vehicle_class',value:vehicle.vehicle_class},
    ]
  return (
    <Card>
    <CardHeader>
      <Heading size='md'>Vehicle within the Star Wars universe</Heading>
    </CardHeader>
  
    <CardBody>
      <Stack divider={<StackDivider />} spacing='4'>
      {vehicleDetails.map(({label, value})=>(
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
