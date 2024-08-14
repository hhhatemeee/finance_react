import { FormProvider, useForm } from 'react-hook-form'
import { FormInput } from '../../shared/features/FormGenerator'
import { GENERATOR_INPUT_TYPE } from '../../shared/types'
import { Grid, Link, Typography } from '@mui/material'
import { Button } from '../../shared/Button'

export const Login = () => {
  const methods = useForm({ defaultValues: { username: '', email: '', password: '' } })

  const {
    handleSubmit,
    formState: { isDirty },
  } = methods

  const handleLogin = handleSubmit(data => {
    console.log(data)
  })

  return (
    <>
      <Grid
        container
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          margin: 6,
          pt: 1,
        }}
      >
        <Grid
          item
          container
          flexDirection={'column'}
          flexWrap={'nowrap'}
          gap={2}
          lg={5}
          md={6}
          sm={8}
        >
          <Grid item>
            <Typography variant='h5'>Create an account</Typography>
            <Typography variant='caption' color={'GrayText'} fontSize={'0.8rem'}>
              Enter your username, email and password
            </Typography>
          </Grid>
          <Grid item mt={1}>
            <FormProvider {...methods}>
              <FormInput
                inputType={GENERATOR_INPUT_TYPE.TEXTFIELD}
                name='username'
                placeholder='username'
                sx={{ width: '100%' }}
                size='small'
              />
              <FormInput
                inputType={GENERATOR_INPUT_TYPE.TEXTFIELD}
                name='email'
                placeholder='example@mail.com'
                sx={{ width: '100%' }}
                size='small'
              />
              <FormInput
                inputType={GENERATOR_INPUT_TYPE.TEXTFIELD}
                name='password'
                placeholder='password'
                sx={{ width: '100%' }}
                size='small'
              />
            </FormProvider>
          </Grid>
          <Grid item container gap={1}>
            <Button variant='contained' fullWidth disabled={!isDirty} onClick={handleLogin}>
              Create account
            </Button>
            <Grid item container alignItems={'center'} gap={1} mt={0.5}>
              <Typography variant='caption' color={'GrayText'}>
                Already have an account?
              </Typography>
              <Link
                variant='caption'
                underline='none'
                onClick={() => { }}
                sx={{ cursor: 'pointer' }}
              >
                <Typography variant='subtitle2' color='primary'>
                  Sign in
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
