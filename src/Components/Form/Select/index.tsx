import { ChangeEvent, useCallback } from 'react'
import { StyledSelect } from './styled'

export type element = {
  id?: string
  value: string
  label: string
}

export type Props = {
  onChange: (e: string | string[]) => void
  value?: string | string[]
  elements: element[]
  disabled?: boolean
  multiple?: boolean
}

export const Select = ({
  onChange,
  value,
  elements,
  disabled,
  multiple = false
}: Props) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = e.target.value
      const newValue = multiple
        ? value?.includes(selectedValue)
          ? ([...value] ?? []).filter((element) => element !== selectedValue)
          : [...(value ?? []), selectedValue]
        : selectedValue
      onChange(newValue)
    },
    [multiple, value, onChange]
  )

  console.log(value)
  return (
    <StyledSelect
      value={value}
      onChange={handleChange}
      disabled={disabled}
      multiple={multiple}
    >
      {elements.map(({ id, label }) => (
        <option key={label} value={value} id={id}>
          {label}
        </option>
      ))}
    </StyledSelect>
  )
}
