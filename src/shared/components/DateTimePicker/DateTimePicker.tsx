import { FC } from 'react'
import {
  DateTimePicker as MUIDateTimePicker,
  DateTimePickerProps as MUIDateTimePickerProps,
  LocalizationProvider,
} from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import moment, { Moment } from 'moment'

export type DateTimePickerProps = {
  error?: boolean
  value?: string | null
  fullWidth?: boolean
  onBlur?: (value: string) => void
  onChange?: (value: string) => void
  onChangeInput?: (value: string) => void
  size?: 'small' | 'medium'
} & Omit<MUIDateTimePickerProps<Moment, boolean>, 'renderInput' | 'onChange'>

export const DateTimePicker: FC<DateTimePickerProps> = ({
  size = 'small',
  value,
  onBlur,
  onChange,
  onChangeInput,
  ...props
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MUIDateTimePicker
        {...props}
        ampm={false}
        value={value ? moment(value) : null}
        onChange={value => moment.isMoment(value) && onChange?.(value.toISOString())}
        slotProps={{
          textField: {
            error: props.error,
            fullWidth: props.fullWidth,
            size: size,
            inputProps: {
              'data-testid': 'date-picker-range-from',
              onBlur: e => onBlur?.(moment(e.target.value).toISOString()),
              onChange: ({ currentTarget: { value } }) =>
                moment.isMoment(value) && onChangeInput?.(value.toISOString()),
            },
          },
        }}
      />
    </LocalizationProvider>
  )
}
