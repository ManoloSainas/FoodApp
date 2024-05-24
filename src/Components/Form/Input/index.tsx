import { ChangeEvent, useCallback } from 'react'
import { StyledInput } from './styled'

type Props = {
  placeholder?: string
  value?: string
  onChange: (e: string) => void
  type: string
  id?: string
  checked?: boolean
  className?: string
  maxLength?: number
}

export const Input = ({
  placeholder,
  value,
  onChange,
  type,
  id,
  checked,
  className,
  maxLength
}: Props) => {
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }, [])

  return (
    <StyledInput
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      id={id}
      checked={checked}
      className={className}
      maxLength={maxLength}
    />
  )
}
