import { Theme } from '@emotion/react'
import { SxProps } from '@mui/material'
import { FocusEventHandler } from 'react'
import { RegisterOptions } from 'react-hook-form'
import { AutocompleteOption } from '../components/AutoComplete'
import { LabelRangeType } from '../components/DatePickerRange'

type CommonFormInputProps = {
  className?: string
  rules?: RegisterOptions
  label?: string
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom'
  placeholder?: string
  disabled?: boolean
  size?: 'small' | 'medium'
  loading?: boolean
  readOnly?: boolean
  value?: unknown
  variant?: 'outlined' | 'filled' | 'standard'
  sx?: SxProps<Theme>
  labelOver?: string
  labelLimit?: boolean
}

type InputFormProps = {
  type?: string
  replacePattern?: RegExp | string
  replaceBy?: string
  maxLengthInput?: number | false
  onBlurInput?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
}

export type DateRangeFormInputProps = {
  labelRange?: LabelRangeType
}

type AutoCompleteFormProps = {
  autocompleteOptions?: AutocompleteOption[]
  getOptionLabel?: ((option: AutocompleteOption) => string) | undefined
  isOptionEqualToValue?:
    | ((option: AutocompleteOption, value: AutocompleteOption) => boolean)
    | undefined
  multiple?: boolean
  getOptionDisabled?: ((option: AutocompleteOption) => boolean) | undefined
}

export type FormInputProps = {
  name: string
  inputType: GENERATOR_INPUT_TYPE
} & CommonFormInputProps &
  InputFormProps &
  DateRangeFormInputProps &
  AutoCompleteFormProps

export enum GENERATOR_INPUT_TYPE {
  INPUT = 'INPUT',
  TEXTFIELD = 'TEXTFIELD',
  TEXTAREA = 'TEXTAREA',
  BUTTON = 'BUTTON',
  CHECKBOX = 'CHECKBOX',
  DATE_TIME_PICKER = 'DATE_TIME_PICKER',
  DATE_RANGE_PICKER = 'DATE_RANGE_PICKER',
  AUTOCOMPLETE = 'AUTOCOMPLETE',
}

type FormInputRowType = {
  name: string
  inputs: FormInputProps[]
}

export type FormInputsType = FormInputProps | FormInputRowType
