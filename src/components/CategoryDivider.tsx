import { Divider, Stack, Text } from '@chakra-ui/react'

const CategoryDivider = ({ category }: { category: string }) => {
  return (
    <Stack direction='row' h='100px' p={4}>
      <Divider orientation='vertical' />
      <Text>{category}</Text>
    </Stack>
  )
}

export default CategoryDivider
