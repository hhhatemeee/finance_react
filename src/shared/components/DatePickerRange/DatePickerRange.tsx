import { FC, useRef } from 'react'
import {
  DateTimePicker as MUIDateTimePicker,
  DateTimePickerProps as MUIDateTimePickerProps,
  LocalizationProvider,
} from '@mui/x-date-pickers'

import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { Divider, Grid } from '@mui/material'
import moment, { Moment } from 'moment'

export type DateRangeValue = string | null

export type LabelRangeType = [string, string]

export type DatePickerRangeProps = {
  labelRange?: LabelRangeType
  value?: Moment[] | null
  error?: boolean
  fullWidth?: boolean
  size?: 'small' | 'medium'
  onChange?: (value?: [DateRangeValue, DateRangeValue]) => void
  onBlur?: (value?: [DateRangeValue, DateRangeValue]) => void
} & Omit<MUIDateTimePickerProps<Moment, boolean>, 'renderInput' | 'value' | 'onChange'>

export const DatePickerRange: FC<DatePickerRangeProps> = ({
  size = 'small',
  onChange,
  value = [],
  onBlur,
  labelRange,
  ...props
}) => {
  const startRef = useRef<HTMLInputElement>(null)
  const endRef = useRef<HTMLInputElement>(null)

  const handleChangeStart = (value: Moment) => {
    onChange?.([
      value ? value.toISOString() : null,
      endRef.current ? moment(endRef.current.value).toISOString() : null,
    ])
  }

  const handleChangeEnd = (value: Moment) => {
    onChange?.([
      startRef.current ? moment(startRef.current.value).toISOString() : null,
      value ? value.toISOString() : null,
    ])
  }

  const handleBlurStart = (value: Moment) => {
    onBlur?.([
      value ? value.toISOString() : null,
      endRef.current ? moment(endRef.current.value).toISOString() : null,
    ])
  }

  const handleBlurEnd = (value: Moment) => {
    onBlur?.([
      startRef.current ? moment(startRef.current.value).toISOString() : null,
      value ? value.toISOString() : null,
    ])
  }

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Grid container justifyContent={'flex-start'} flexWrap={'nowrap'} alignItems={'center'}>
        <Grid item container>
          <MUIDateTimePicker
            {...props}
            ampm={false}
            value={value && value[0] ? moment(value[0]) : null}
            inputRef={startRef}
            label={labelRange?.[0]}
            onChange={handleChangeStart as (value: unknown) => void}
            slotProps={{
              textField: {
                error: props.error,
                fullWidth: props.fullWidth,
                size: size,
                inputProps: {
                  'data-testid': 'date-picker-range-from',
                  onBlur: e => handleBlurStart(moment(e.target.value)),
                }
              },
            }}
          />
        </Grid>
        <Grid>
          <Divider sx={{ borderWidth: 1, mx: 1, width: 20 }} />
        </Grid>
        <Grid item container>
          <MUIDateTimePicker
            {...props}
            ampm={false}
            onChange={handleChangeEnd as (value: unknown) => void}
            inputRef={endRef}
            label={labelRange?.[1]}
            value={value && value[1] ? moment(value[1]) : null}
            slotProps={{
              textField: {
                error: props.error,
                fullWidth: props.fullWidth,
                size: size,
                inputProps: {
                  'data-testid': 'date-picker-range-from',
                  onBlur: e => handleBlurEnd(moment(e.target.value)),
                }
              },
            }}
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
  )
}
