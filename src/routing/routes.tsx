import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import PersonPage from '../pages/PersonPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'people/:id',
    element: <PersonPage />,
  },
])

export default router
