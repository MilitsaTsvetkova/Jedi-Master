import { useQuery } from '@tanstack/react-query'
import ApiClient from '../services/api-client'

const useRelatedEntities = (entity: string, ids: string[]) => {
  const apiClient = new ApiClient(`/${entity}`)
  return useQuery({
    queryKey: [`${entity}-related`, ids],
    queryFn: () => apiClient.getAll(ids),
  })
}

export default useRelatedEntities
