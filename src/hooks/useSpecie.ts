import { useQuery } from '@tanstack/react-query'
import Specie from '../entities/Specie'
import ApiClient from '../services/api-client'
const apiClient = new ApiClient<Specie>('/species')

const useSpecie = (id: string) =>
  useQuery({
    queryKey: ['specie', id],
    queryFn: () => apiClient.getById(id),
  })

export default useSpecie
