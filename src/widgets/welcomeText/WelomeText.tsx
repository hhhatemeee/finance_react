import { Box, Typography, Grid } from '@mui/material'
import { Dots } from '../../shared/components/Dots'
import { Button } from '../../shared/Button'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../app/constants/routes'

export const WelomeText = () => {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate(ROUTES.LOGIN)
  }

  return (
    <Dots className='transition-all animate-fade'>
      <Box p={3}>
        <Typography variant='h1' className='transition-all animate-fade animate-down-1'>
          Manage your life online
        </Typography>
        <Box width={'75%'} mt={2} className='animate-up-1'>
          <Typography variant='h5' className='transition-all animate-fade' color={'#9ca3af'}>
            Start saving, tracking your spending and setting goals.
          </Typography>
          <Typography variant='h5' className='transition-all animate-fade' color={'#9ca3af'}>
            Move forward step by step.
          </Typography>
          <Grid
            container
            alignItems={'center'}
            flexWrap={'nowrap'}
            justifyContent={'flex-end'}
            gap={3}
            mt={2}
          >
            <Grid className='animate-wave' item flexWrap={'nowrap'} container width={'fit-content'}>
              <Typography variant='h5' className='transition-all ' color={'#9ca3af'}>
                start right now
              </Typography>
              <Typography
                ml={3}
                variant='h5'
                className='transition-all animate-wave '
                color={'#9ca3af'}
              >
                →
              </Typography>
            </Grid>
            <Button
              variant='contained'
              sx={{ fontSize: '1.5rem', py: 1, px: 4, borderRadius: '8px' }}
              onClick={handleStart}
            >
              Get Started
            </Button>
          </Grid>
        </Box>
      </Box>
    </Dots>
  )
}
