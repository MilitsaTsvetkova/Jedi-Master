import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { useState } from 'react'

const Categories = () => {
  const [value, setValue] = useState('1')
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction='row' spacing='24px'>
        <Radio value='1'>All</Radio>
        <Radio value='2'>People</Radio>
        <Radio value='3'>Planets</Radio>
        <Radio value='3'>Starships</Radio>
        <Radio value='3'>Vehicles</Radio>
      </Stack>
    </RadioGroup>
  )
}

export default Categories
