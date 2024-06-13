import { ChangeEvent, useCallback } from 'react'
import { StyledSelect } from './styled'

export type deliveryType = {
  id: string
  value: string
  label: string
}

export type Props = {
  onChange: (e: string | string[]) => void
  value?: string | string[]
  deliveries: deliveryType[]
  disabled?: boolean
  multiple?: boolean
}

export const Select = ({
  onChange,
  value,
  deliveries,
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
      {deliveries.map(({ id, label }) => (
        <option key={id} value={id} id={id}>
          {label}
        </option>
      ))}
    </StyledSelect>
  )
}
