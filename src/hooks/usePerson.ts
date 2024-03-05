import { useQuery } from '@tanstack/react-query'
import ApiClient from '../services/api-client'
import Person from '../entities/Person'
const apiClient = new ApiClient<Person>('/people')

const usePerson = (id: string) =>
  useQuery({
    queryKey: ['person', id],
    queryFn: () => apiClient.getById(id),
  })

export default usePerson
