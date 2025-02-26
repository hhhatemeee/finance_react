import { FC } from 'react'

import { Button as MUIButton, ButtonProps as MUIButtonProps } from '@mui/material'

export type ButtonProps = MUIButtonProps

export const Button: FC<ButtonProps> = props => (
  <MUIButton
    data-testid='button'
    {...props}
    sx={{ textTransform: 'initial', ...props.sx }}
  >
    {props.children}
  </MUIButton>
)
