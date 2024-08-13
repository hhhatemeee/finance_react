import { Grid, } from '@mui/material'
import { Header } from '../../widgets/header'
import { WelomeText } from '../../widgets/welcomeText'

export const Welcome = () => {
  return (
    <>
      <Header />
      <Grid container flexWrap={'nowrap'} xl={12} lg={12} sm={12} px={'10%'}>
        <Grid item width={'60%'}>
          <WelomeText />
        </Grid>
        <Grid item></Grid>
      </Grid>
    </>
  )
}
