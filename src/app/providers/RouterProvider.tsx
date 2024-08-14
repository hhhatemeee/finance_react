import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Welcome } from '../../pages/welcome'
import { Login } from '../../pages/login'
import { ROUTES } from '../constants/routes'
import { NoAuthLayout } from '../containers/noauth'

export const AppRoute = () => {
  const router = createBrowserRouter([
    {
      element: <NoAuthLayout />,
      children: [
        {
          path: '/',
          element: <Welcome />,
        },
        {
          path: ROUTES.LOGIN,
          element: <Login />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
