import { Grid } from '@mui/material'
import { Header } from '../../../widgets/header'
import { Outlet, useLocation } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'

export const NoAuthLayout = () => {
  const { pathname } = useLocation()
  const isHomePage = pathname === ROUTES.MAIN
  const isLoginPage = pathname === ROUTES.LOGIN

  return (
    <>
      <Header disableAnimate={!isHomePage} hideAuth={isLoginPage} />
      <Grid container flexWrap={'nowrap'} xl={12} lg={12} sm={12} px={'10%'}>
        <Outlet />
      </Grid>
    </>
  )
}
