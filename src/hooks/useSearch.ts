import { useQuery } from '@tanstack/react-query'
import ApiClient from '../services/api-client'
import SearchResult from '../entities/Search'

const useSearch = (entity: string, term: string) => {
  const apiClient = new ApiClient<SearchResult>(`/${entity}`)
  return useQuery({
    queryKey: [`search ${entity}`, term],
    queryFn: () => apiClient.getBySearchTerm(entity, term),
  })
}

export default useSearch
