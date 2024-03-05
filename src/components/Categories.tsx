import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { useState } from 'react'
interface Category {
  label: string
  value: string
}

const categories: Category[] = [
  { label: 'All', value: 'all' },
  { label: 'People', value: 'people' },
  { label: 'Planets', value: 'planets' },
  { label: 'Starships', value: 'starships' },
  { label: 'Vehicles', value: 'vehicles' },
]

const Categories = () => {
  const [value, setValue] = useState(categories[0].value)

  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction='row' spacing='24px'>
        {categories.map(({ label, value }) => (
          <Radio key={value} value={value} colorScheme='yellow'>
            {label}
          </Radio>
        ))}
      </Stack>
    </RadioGroup>
  )
}

export default Categories
