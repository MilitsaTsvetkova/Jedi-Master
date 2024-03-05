import { Spinner } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useStarship from '../hooks/useStarship'
import StarshipDetails from '../components/StarshipDetails'

const StarshipPage = () => {
  const { id } = useParams()
  const { data: starShip, isLoading, error } = useStarship(id!)
  if (isLoading) return <Spinner />
  if (error || !starShip) throw error
  return <StarshipDetails starship={starShip} />
}

export default StarshipPage
