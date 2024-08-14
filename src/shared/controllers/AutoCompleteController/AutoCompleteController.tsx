import { TextField } from '@mui/material'
import { FC } from 'react'
import { Controller, RegisterOptions, useFormContext } from 'react-hook-form'
import { AutoCompleteProps, AutoComplete } from '../../components'

type AutoCompleteControllerProps<T> = {
  name: string
  rules?: RegisterOptions
  variant?: 'outlined' | 'filled' | 'standard'
  onChangeCustom?: (details: any) => void
  label?: string
  placeholder?: string
} & Omit<AutoCompleteProps<T>, 'renderInput'>

export const AutoCompleteController: FC<AutoCompleteControllerProps<any>> = ({
  name,
  rules,
  placeholder,
  value,
  variant = 'outlined',
  onChangeCustom,
  label,
  ...props
}) => {
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value: formValue }, fieldState: { invalid } }) => (
        <AutoComplete
          {...props}
          value={value ?? formValue}
          onChange={details => {
            onChange(details)
            onChangeCustom?.(details)
          }}
          renderInput={params => (
            <TextField
              {...params}
              label={label}
              variant={variant}
              placeholder={placeholder}
              error={invalid}
            />
          )}
        />
      )}
      rules={rules}
    />
  )
}
