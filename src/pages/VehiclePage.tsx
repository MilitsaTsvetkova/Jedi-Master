import { Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import VehicleDetails from '../components/VehicleDetails';
import useVehicle from '../hooks/useVehicle';

const VehiclePage = () => {
  const { id } = useParams()
  const { data: vehicle, isLoading, error } = useVehicle(id!);
  if (isLoading) return <Spinner />;
  if (error || !vehicle) throw error;
  return <VehicleDetails vehicle={vehicle}/>
}

export default VehiclePage

