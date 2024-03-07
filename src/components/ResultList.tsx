import React from 'react'

import { Box } from '@chakra-ui/react'
import CategoryList from './CategoryList'
import Categories from './Categories'
import { categories } from '../common/types'

const ResultList = () => {
  return (
    <Box>
      <Categories />
      <Box>
        {categories
          .filter((category) => category.value !== 'all')
          .map((category) => (
            <CategoryList key={category.value} category={category} />
          ))}
      </Box>
    </Box>
  )
}

export default ResultList
