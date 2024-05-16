import { ChangeEvent } from 'react'
import { StyledSelect } from './styled'

type Props = {
  onChange: (e: string) => void
  value?: string
  options: string[]
}

export const Select = ({ onChange, value, options }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }
  return (
    <StyledSelect value={value} onChange={handleChange}>
      {options.map((value) => (
        <option key={value}>{value}</option>
      ))}
    </StyledSelect>
  )
}
