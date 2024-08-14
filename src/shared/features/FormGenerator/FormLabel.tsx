import { FC } from 'react'
import { FormControlLabel, FormControlLabelProps, Typography, colors } from '@mui/material'

type FormLabelProps = {
  name: string
  label?: string
  labelPlacement: 'end' | 'start' | 'top' | 'bottom'
  control: FormControlLabelProps['control']
  labelLimit?: boolean
}

export const FormLabel: FC<FormLabelProps> = ({
  labelLimit,
  label = '',
  labelPlacement,
  control,
}) => {
  return (
    <FormControlLabel
      sx={{
        width: '100%',
        m: 0,
        '*': {
          transition: '0.2s ease-in',
        },
        ...(labelPlacement === 'top' && { alignItems: 'start' }),
      }}
      control={control}
      labelPlacement={labelPlacement}
      label={
        label ? (
          <Typography
            title={label}
            sx={{
              // mr: 3,
              color: colors.grey[700],

              ...(labelPlacement === 'top' && {
                mb: 1,
                width: '100%',
                // whiteSpace: 'nowrap',
              }),
              ...(labelLimit && {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                width: 40,
              }),
            }}
          >
            {label}
          </Typography>
        ) : (
          <></>
        )
      }
    />
  )
}
