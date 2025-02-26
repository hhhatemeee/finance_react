import React, { FC, FocusEventHandler, ReactElement } from 'react'

import { RegisterOptions } from 'react-hook-form'
import { Grid, SxProps, Theme } from '@mui/material'
import moment, { Moment } from 'moment'

import { FormLabel } from './FormLabel'
import { TextFieldController } from '../../controllers/TextFieldController'
import { InputController } from '../../controllers/InputController'
import { DatePickerRangeController } from '../../controllers/DateTimePickerController/DatePickerRangeController'
import { CheckboxController } from '../../controllers/CheckboxController'
import { AutoCompleteController } from '../../controllers/AutoCompleteController'
import { DateTimePickerController } from '../../controllers/DateTimePickerController'
import { AutocompleteOption } from '../../components/AutoComplete'
import { DateRangeValue, LabelRangeType } from '../../components/DatePickerRange'
import { GENERATOR_INPUT_TYPE } from '../../types'

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

export const FormInput: FC<FormInputProps> = ({
  rules,
  label,
  labelPlacement = 'start',
  inputType,
  name,
  disabled,
  placeholder,
  type,
  size = 'medium',
  replacePattern,
  replaceBy = '',
  maxLengthInput = 255,
  readOnly,
  onBlurInput,
  variant,
  sx,
  className,
  value,
  labelOver,
  labelRange,
  labelLimit = true,
  autocompleteOptions,
  getOptionDisabled,
  getOptionLabel,
  isOptionEqualToValue,
  loading,
  multiple,
}) => {
  const getValue = () => {
    switch (inputType) {
      case GENERATOR_INPUT_TYPE.DATE_TIME_PICKER:
        return typeof value === 'string' ? value : null
      case GENERATOR_INPUT_TYPE.DATE_RANGE_PICKER:
        return Array.isArray(value) && !value.some(el => el instanceof Date)
          ? [moment(value[0]).format(), moment(value[1]).format()]
          : [null, null]
      default:
        return value
    }
  }
  console.log(123);
  const renderInput = (): ReactElement => {
    switch (inputType) {
      case GENERATOR_INPUT_TYPE.TEXTFIELD:
        return (
          <TextFieldController
            label={labelOver}
            fullWidth
            onBlur={onBlurInput}
            size={size}
            placeholder={placeholder ?? placeholder}
            name={name}
            InputProps={{ readOnly: readOnly }}
            rules={rules}
            disabled={disabled}
            type={type}
            maxLength={maxLengthInput}
            replacePattern={replacePattern}
            replaceBy={replaceBy}
            value={value}
            variant={variant}
            sx={sx}
            className={className}
          />
        )
      case GENERATOR_INPUT_TYPE.TEXTAREA:
        return (
          <TextFieldController
            multiline
            rows={5}
            label={labelOver}
            fullWidth
            onBlur={onBlurInput}
            size={size}
            placeholder={placeholder ?? placeholder}
            name={name}
            InputProps={{ readOnly: readOnly }}
            rules={rules}
            disabled={disabled}
            type={type}
            maxLength={maxLengthInput}
            replacePattern={replacePattern}
            replaceBy={replaceBy}
            value={value}
            variant={variant}
            sx={sx}
            className={className}
          />
        )
      case GENERATOR_INPUT_TYPE.INPUT:
        return (
          <InputController
            fullWidth
            onBlur={onBlurInput}
            size={size}
            placeholder={placeholder ?? placeholder}
            name={name}
            readOnly={readOnly}
            rules={rules}
            disabled={disabled}
            type={type}
            maxLength={maxLengthInput}
            replacePattern={replacePattern}
            replaceBy={replaceBy}
            value={value}
            sx={sx}
            className={className}
          />
        )
      case GENERATOR_INPUT_TYPE.DATE_RANGE_PICKER:
        return (
          <DatePickerRangeController
            fullWidth
            readOnly={readOnly}
            rules={rules}
            name={name}
            disabled={disabled}
            value={getValue() as [DateRangeValue, DateRangeValue]}
            size={size}
            className={className}
            labelRange={labelRange}
          />
        )
      case GENERATOR_INPUT_TYPE.DATE_TIME_PICKER:
        return (
          <DateTimePickerController
            fullWidth
            readOnly={readOnly}
            rules={rules}
            name={name}
            disabled={disabled}
            value={getValue() as (string & Moment) | null}
            size={size}
            label={labelOver}
            className={className}
          />
        )
      case GENERATOR_INPUT_TYPE.CHECKBOX:
        return (
          <CheckboxController
            rules={rules}
            name={name}
            disabled={disabled}
            value={getValue()}
            sx={sx}
          />
        )
      case GENERATOR_INPUT_TYPE.AUTOCOMPLETE:
        return (
          <AutoCompleteController
            fullWidth
            size={size}
            name={name}
            disableCloseOnSelect={multiple}
            defaultValue={multiple ? [] : {}}
            loading={loading}
            isOptionEqualToValue={isOptionEqualToValue}
            id={name}
            getOptionLabel={getOptionLabel}
            options={autocompleteOptions ?? []}
            rules={rules}
            multiple={multiple}
            disabled={disabled}
            placeholder={placeholder}
            value={getValue()}
            variant={variant}
            sx={sx}
            getOptionDisabled={getOptionDisabled}
            label={labelOver}
            className={className}
          />
        )
      default:
        return <></>
    }
  }

  return (
    <Grid
      item
      container={inputType !== GENERATOR_INPUT_TYPE.CHECKBOX}
      justifyContent='space-between'
      mb={1}
    >
      <FormLabel
        name={name}
        label={label}
        labelPlacement={labelPlacement}
        control={renderInput()}
        labelLimit={labelLimit}
      />
    </Grid>
  )
}
