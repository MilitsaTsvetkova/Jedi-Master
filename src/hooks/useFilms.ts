import { useQuery } from '@tanstack/react-query'
import ApiClient from '../services/api-client'
import Film from '../entities/Film'
const apiClient = new ApiClient('/films')

const useFilms = (ids: string[]) =>
  useQuery({
    queryKey: ['films', ids],
    queryFn: () => apiClient.getAll(ids),
  })

export default useFilms
