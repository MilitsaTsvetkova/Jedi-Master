import { Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom'
import usePerson from '../hooks/usePerson';
import PersonDetails from '../components/PersonDetails';

const PersonPage = () => {
  const { id } = useParams()
  const { data: person, isLoading, error } = usePerson(id!);
  if (isLoading) return <Spinner />;
  if (error || !person) throw error;
  return <PersonDetails person={person}/>
}

export default PersonPage
