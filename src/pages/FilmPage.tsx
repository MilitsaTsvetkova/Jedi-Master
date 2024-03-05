import { Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import FilmDetails from '../components/FilmDetails';
import useFilm from '../hooks/useFilm';

const FilmPage = () => {
  const { id } = useParams()
  const { data: film, isLoading, error } = useFilm(id!);
  if (isLoading) return <Spinner />;
  if (error || !film) throw error;
  return <FilmDetails film={film}/>
}

export default FilmPage

