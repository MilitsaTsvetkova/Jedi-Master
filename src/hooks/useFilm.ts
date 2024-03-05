import { useQuery } from '@tanstack/react-query'
import ApiClient from '../services/api-client'
import Film from '../entities/Film'
const apiClient = new ApiClient<Film>('/films')

const useFilm = (id: string) =>
  useQuery({
    queryKey: ['film', id],
    queryFn: () => apiClient.getById(id),
  })

export default useFilm
