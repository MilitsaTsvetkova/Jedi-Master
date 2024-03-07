import { Box, Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { categories } from '../common/types'

const Categories = () => {
  const [value, setValue] = useState(categories[0].value)

  return (
    <Box m={4}>
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction='row' spacing={5}>
          {categories.map(({ label, value }) => (
            <Radio key={value} value={value} colorScheme='yellow'>
              {label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Box>
  )
}

export default Categories
