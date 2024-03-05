import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import PersonPage from '../pages/PersonPage'
import SearchPage from '../pages/SearchPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'people/:id',
    element: <PersonPage />,
  },
  {
    path: 'search',
    element: <SearchPage />,
  },
])

export default router
