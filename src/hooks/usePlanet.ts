import { useQuery } from "@tanstack/react-query";
import Planet from '../entities/Planet';
import ApiClient from "../services/api-client";
const apiClient = new ApiClient<Planet>("/planets");

const usePlanet = (id: string) =>
  useQuery({
    queryKey: ["planet", id],
    queryFn: () => apiClient.getById(id),
  });

export default usePlanet;
