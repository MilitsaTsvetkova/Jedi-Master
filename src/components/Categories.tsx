import { Badge, Box, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { categories } from '../common/types'
import useCategoryStore from '../store/store'

const Categories = () => {
  const { selectedCategory: category, setSelectedCategory } = useCategoryStore()

  return (
    <Box m={4}>
      <RadioGroup
        onChange={setSelectedCategory}
        value={category.name}
        name='categories'
      >
        <Stack direction='row' spacing={5}>
          {categories.map(({ label, value }) => (
            <Radio key={value} value={value} colorScheme='yellow'>
              {label} <Badge>{category.count}</Badge>
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Box>
  )
}

export default Categories
