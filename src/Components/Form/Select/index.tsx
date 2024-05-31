import { ChangeEvent, useCallback } from 'react'
import { StyledSelect } from './styled'

type Props = {
  onChange: (e: string | string[]) => void
  value?: string | string[]
  options: { value: string; label: string }[]
  disabled?: boolean
  multiple?: boolean
  className?: string
}

export const Select = ({
  onChange,
  value,
  options,
  disabled,
  multiple = false,
  className
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
      className={className}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </StyledSelect>
  )
}
