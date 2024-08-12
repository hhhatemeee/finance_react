import { FC } from 'react'
import { AppBar } from '../../shared/AppBar'
import { Grid, Typography } from '@mui/material'
import { CustomSvgIcon } from '../../shared/CustomSvgIcon'
import { Button } from '../../shared/Button'
import logo from '../../assets/logo_color_2.svg'

export const Header: FC = () => {
  return (
    <div>
      <AppBar>
        <Grid container justifyContent={'space-between'} flexWrap={'nowrap'}>
          <Grid item container alignItems={'center'} gap={1} ml={2}>
            <Grid item height={40}>
              <CustomSvgIcon src={logo} sx={{ width: 40, height: 40 }} />
            </Grid>
            <Grid item>
              <Typography variant='h6' component='div' color={'#5771f0'} fontWeight={'600px'}>
                Think Pockets
              </Typography>
            </Grid>
          </Grid>
          <Grid item container flexWrap={'nowrap'} width={'fit-content'} gap={1}>
            <Grid item>
              <Button color='primary' sx={{ height: 40, width: 120 }}>
                Support TK
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant='outlined'
                color='primary'
                sx={{ height: 40, width: 150, boxShadow: '0 1px 3px 0 #e0e0e6' }}
              >
                Sing in / Sing up
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  )
}
