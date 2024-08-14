import { FC } from 'react'
import { AppBar } from '../../shared/components/AppBar'
import { Grid, Typography } from '@mui/material'
import { CustomSvgIcon } from '../../shared/components/CustomSvgIcon'
import { Button } from '../../shared/Button'
import logo from '../../assets/logo_color_2.svg'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../app/constants/routes'

export const Header: FC<{ disableAnimate?: boolean; hideAuth?: boolean }> = ({
  disableAnimate,
  hideAuth,
}) => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate(ROUTES.LOGIN)
  }

  const handleHome = () => {
    navigate(ROUTES.MAIN)
  }

  const animatedClassnames = disableAnimate
    ? undefined
    : 'transition-all animate-fade animate-down-2'

  return (
    <AppBar className={animatedClassnames}>
      <Grid
        container
        justifyContent={'space-between'}
        flexWrap={'nowrap'}
        className={animatedClassnames}
        px={'10%'}
      >
        <Grid item container alignItems={'center'} gap={1} ml={2}>
          <Grid item height={40}>
            <CustomSvgIcon
              src={logo}
              sx={{ width: 40, height: 40, cursor: 'pointer' }}
              onClick={handleHome}
            />
          </Grid>
          <Grid item>
            <Typography variant='h6' component='div' color={'#5771f0'} fontWeight={'600px'}>
              {/* Think Pockets */}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container flexWrap={'nowrap'} width={'fit-content'} gap={1}>
          <Grid item>
            <Button color='primary' sx={{ height: 40, width: 120 }}>
              Donate me
            </Button>
          </Grid>
          {!hideAuth && (
            <Grid item>
              <Button
                variant='outlined'
                color='primary'
                sx={{ height: 40, width: 150, boxShadow: '0 1px 3px 0 #e0e0e6' }}
                onClick={handleLogin}
              >
                Sing in / Sing up
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </AppBar>
  )
}
