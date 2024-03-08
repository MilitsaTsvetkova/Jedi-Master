import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Spinner,
  Stack,
} from '@chakra-ui/react'
import { Link, useSearchParams } from 'react-router-dom'
import Film from '../entities/Film'
import Person from '../entities/Person'
import Planet from '../entities/Planet'
import Specie from '../entities/Specie'
import Starship from '../entities/Starship'
import Vehicle from '../entities/Vehicle'
import useSearch from '../hooks/useSearch'
import { getRedirectLink } from '../utils/getRedirectLink'
import CategoryDivider from './CategoryDivider'
import Films from './Films'
import { extractId } from '../utils/extractId'
import { Category } from '../common/types'

const CategoryList = ({ category }: { category: Category }) => {
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('q') ?? ''
  const { data, isLoading, error } = useSearch(category.value, searchQuery)

  if (isLoading) return <Spinner />
  if (error) throw error
  const getValue = (
    item: Film | Person | Planet | Vehicle | Specie | Starship
  ): string => {
    if ('name' in item) {
      return item.name as string
    }
    return item.title
  }
  const getFilms = (
    item: Film | Person | Planet | Vehicle | Specie | Starship
  ): string[] => {
    if ('films' in item) {
      return item.films
    }
    return []
  }
  return (
    <Card m={2}>
      <CardHeader>
        <CategoryDivider key={category.value} category={category.label} />
      </CardHeader>
      <CardBody>
        {data?.results.map((item) => (
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            key={getValue(item)}
          >
            <Stack>
              <CardBody>
                <Heading size='md'>
                  {' '}
                  <Link to={getRedirectLink(item.url)}>{getValue(item)}</Link>
                </Heading>
                <Box pt='2' fontSize='sm'>
                  <Films
                    films={getFilms(item).map((film) => extractId(film))}
                    label={'Appears in: '}
                  />
                </Box>
              </CardBody>
            </Stack>
          </Card>
        ))}
      </CardBody>
    </Card>
  )
}

export default CategoryList
