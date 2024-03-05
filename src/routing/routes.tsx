import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
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
      { index: true, element: <HomePage /> },
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
