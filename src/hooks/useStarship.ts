import { useQuery } from '@tanstack/react-query'
import Starship from '../entities/Starship'
import ApiClient from '../services/api-client'
const apiClient = new ApiClient<Starship>('/starships')

const useStarship = (id: string) =>
  useQuery({
    queryKey: ['starship', id],
    queryFn: () => apiClient.getById(id),
  })

export default useStarship
