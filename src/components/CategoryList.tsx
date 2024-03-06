import { Box, Card, CardBody, CardHeader, Spinner } from '@chakra-ui/react'
import { Link, useSearchParams } from 'react-router-dom'
import useSearch from '../hooks/useSearch'
import { Category } from './Categories'
import CategoryDivider from './CategoryDivider'
import { getRedirectLink } from '../utils/getRedirectLink'
import Film from '../entities/Film'
import Person from '../entities/Person'
import Planet from '../entities/Planet'
import Specie from '../entities/Specie'
import Starship from '../entities/Starship'
import Vehicle from '../entities/Vehicle'

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
  return (
    <Card m={2}>
      <CardHeader>
        <CategoryDivider key={category.value} category={category.label} />
      </CardHeader>
      <CardBody>
        {data?.results.map((item) => (
          <Box key={getValue(item)} paddingLeft={5}>
            <Link to={getRedirectLink(item.url)}>{getValue(item)}</Link>
          </Box>
        ))}
      </CardBody>
    </Card>
  )
}

export default CategoryList
