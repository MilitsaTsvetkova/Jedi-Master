import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import Layout from '../pages/Layout'
import PersonPage from '../pages/PersonPage'
import SearchPage from '../pages/SearchPage'
import VehiclePage from '../pages/VehiclePage'
import FilmPage from '../pages/FilmPage'
import SpeciePage from '../pages/SpeciePage'
import PlanetPage from '../pages/PlanetPage'
import StarshipPage from '../pages/StarshipPage'
import UsersList from '../components/UserList'
import UserDetail from '../components/UserDetail'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'users',
        element: <UsersList />,
        children: [
          {
            path: ':id',
            element: <UserDetail />,
          },
        ],
      },
      {
        path: 'people/:id',
        element: <PersonPage />,
      },
      {
        path: 'vehicles/:id',
        element: <VehiclePage />,
      },
      {
        path: 'starships/:id',
        element: <StarshipPage />,
      },
      {
        path: 'planets/:id',
        element: <PlanetPage />,
      },
      {
        path: 'species/:id',
        element: <SpeciePage />,
      },
      {
        path: 'films/:id',
        element: <FilmPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
    ],
  },
])

export default router
