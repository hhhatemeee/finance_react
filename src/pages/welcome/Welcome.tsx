import { Grid } from '@mui/material'
import { WelomeText } from '../../widgets/welcomeText'

export const Welcome = () => {
  return (
    <>
      <Grid item width={'60%'}>
        <WelomeText />
      </Grid>
      <Grid item></Grid>
    </>
  )
}
