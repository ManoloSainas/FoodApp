import { ChangeEvent } from 'react'
import { StyledSelect } from './styled'

type Props = {
  onChange: (e: string) => void
  value?: string
  options: string[]
  disabled?: boolean
  multiple?: boolean
}

export const Select = ({
  onChange,
  value,
  options,
  disabled,
  multiple = false
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }

  return (
    <StyledSelect
      value={value}
      onChange={handleChange}
      disabled={disabled}
      multiple={multiple}
    >
      {options.map((value) => (
        <option key={value}>{value}</option>
      ))}
    </StyledSelect>
  )
}
