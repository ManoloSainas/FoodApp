import { ChangeEvent } from 'react'

type Props = {
  onChange: (e: string) => void
  value?: string
}

export const Select = ({ onChange, value }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }
  return (
    <select value={value} onChange={handleChange}>
      <option value="uno">uno</option>
      <option value="due">due</option>
    </select>
  )
}
