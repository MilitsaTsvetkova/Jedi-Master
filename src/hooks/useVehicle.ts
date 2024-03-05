import { useQuery } from '@tanstack/react-query'
import Vehicle from '../entities/Vehicle'
import ApiClient from '../services/api-client'
const apiClient = new ApiClient<Vehicle>('/vehicles')

const useVehicle = (id: string) =>
  useQuery({
    queryKey: ['vehicle', id],
    queryFn: () => apiClient.getById(id),
  })

export default useVehicle
