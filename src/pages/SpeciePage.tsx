import { Spinner } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import SpecieDetails from '../components/SpecieDetails'
import useSpecie from '../hooks/useSpecie'

const SpeciePage = () => {
  const { id } = useParams()
  const { data: specie, isLoading, error } = useSpecie(id!)
  if (isLoading) return <Spinner />
  if (error || !specie) throw error
  return <SpecieDetails specie={specie} />
}

export default SpeciePage
