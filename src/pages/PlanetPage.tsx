import { Spinner } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import usePlanet from '../hooks/usePlanet'
import PlanetDetails from '../components/PlanetDetails'

const PlanetPage = () => {
  const { id } = useParams()
  const { data: planet, isLoading, error } = usePlanet(id!)
  if (isLoading) return <Spinner />
  if (error || !planet) throw error
  return <PlanetDetails planet={planet} />
}

export default PlanetPage
