import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Welcome } from '../../pages/welcome'
import { Login } from '../../pages/login'
import { ROUTES } from '../constants/routes'

export const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Welcome />,
    },
    {
      path: ROUTES.LOGIN,
      element: <Login />,
    },
  ])

  return <RouterProvider router={router} />
}
