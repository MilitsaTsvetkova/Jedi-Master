import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import PersonPage from '../pages/PersonPage'
import SearchPage from '../pages/SearchPage'
import Layout from '../pages/Layout'
import ErrorPage from '../pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <App /> },
      {
        path: 'people/:id',
        element: <PersonPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
    ],
  },
])

export default router
