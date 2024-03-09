import { ListItem, OrderedList } from '@chakra-ui/react'
import { useOutlet } from 'react-router-dom'

const UsersList = () => {
  const outlet = useOutlet()
  const users = [
    { id: 1, name: 'Ivan' },
    { id: 2, name: 'Dave' },
  ]
  return (
    <>
      <div>User List</div>
      <OrderedList>
        {users.map((user) => (
          <ListItem key={user.id}>{user.name}</ListItem>
        ))}
      </OrderedList>
      {/* UserDetail shows via the Outlet */}
      {outlet}
    </>
  )
}
export default UsersList
