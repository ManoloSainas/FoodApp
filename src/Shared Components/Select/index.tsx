import { ChangeEvent, useCallback } from 'react'
import { StyledSelect } from './styled'

export type Element = {
  id: string
  value: string
  label: string
}

export type Props = {
  onChange: (e: string | string[]) => void
  value?: string | string[]
  elements: Element[]
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
          ? (value as string[]).filter((element) => element !== selectedValue)
          : [...(value as string[]), selectedValue]
        : selectedValue
      onChange(newValue)
    },
    [multiple, value, onChange]
  )

  return (
    <StyledSelect
      value={value}
      onChange={handleChange}
      disabled={disabled}
      multiple={multiple}
    >
      {elements.map(({ id, label }) => (
        <option key={id} value={id} id={id}>
          {label}
        </option>
      ))}
    </StyledSelect>
  )
}
