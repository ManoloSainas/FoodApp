/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ChangeEvent, useCallback } from 'react'
import { StyledSelect } from './styled'

type SingleOnChange = (e: string) => void
type MultipleOnChange = (e: string[]) => void

export type Element = {
  id: string
  value: string
  label: string
}
type CommonProps = {
  elements: Element[]
  disabled?: boolean
  arialLabel?: string
}
export type SingleSelectProps = {
  onChange: SingleOnChange
  value?: string
  multiple?: false
}
export type MultipleSelectProps = {
  onChange: MultipleOnChange
  value?: string[]
  multiple: true
}
export type Props = CommonProps & (SingleSelectProps | MultipleSelectProps)

export const Select = ({
  onChange,
  value,
  elements,
  disabled,
  multiple = false,
  arialLabel
}: Props) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = e.target.value
      if (multiple) {
        const newValue = value?.includes(selectedValue)
          ? (value as string[]).filter((element) => element !== selectedValue)
          : [...(value as string[]), selectedValue]

        // @ts-ignore
        onChange(newValue)
      } else {
        // @ts-ignore
        onChange(selectedValue)
      }
    },
    [multiple, value, onChange]
  )

  return (
    <StyledSelect
      value={value}
      onChange={handleChange}
      disabled={disabled}
      multiple={multiple}
      aria-label={arialLabel}
    >
      {elements.map(({ id, label }) => (
        <option key={id} value={id} id={id}>
          {label}
        </option>
      ))}
    </StyledSelect>
  )
}
