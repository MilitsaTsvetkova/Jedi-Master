import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import Layout from '../pages/Layout'
import PersonPage from '../pages/PersonPage'
import SearchPage from '../pages/SearchPage'
import VehiclePage from '../pages/VehiclePage'

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
        path: 'vehicles/:id',
        element: <VehiclePage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
    ],
  },
])

export default router
