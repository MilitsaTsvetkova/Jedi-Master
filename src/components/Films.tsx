import { Box, HStack, Heading, Spinner, Tag } from '@chakra-ui/react'
import useRelatedEntities from '../hooks/useRelatedEntities'
import { Link } from 'react-router-dom'
import { getRedirectLink } from '../utils/getRedirectLink'
import Film from '../entities/Film'

const Films = ({ films, label }: { films: string[]; label: string }) => {
  const { data, isLoading } = useRelatedEntities('films', films)
  if (isLoading) return <Spinner />

  return (
    <Box>
      <Heading size='xs' textTransform='uppercase'>
        {label}
      </Heading>
      <Box pt='2' fontSize='sm'>
        <HStack spacing={4}>
          {data?.map((film: Film) => (
            <Tag key={film.title} variant='solid' colorScheme='yellow'>
              <Link to={getRedirectLink(film.url)} key={film.title}>
                {film.title}
              </Link>
            </Tag>
          ))}
        </HStack>
      </Box>
    </Box>
  )
}

export default Films
