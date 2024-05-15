import { IconButton } from '../IconButton'
import { ButtonVariant } from '../Button/styled'
import { IconName } from '../Icon/config'
import { ChangeEvent } from 'react'

type Props = {
  placeholder?: string
  onClick: () => void
  iconName: IconName
  variant?: ButtonVariant
  disabled?: boolean
  onChange: (e: string) => void
  value?: string
}

export const SearchBar = ({
  placeholder,
  onClick,
  iconName,
  variant,
  disabled,
  onChange,
  value
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }
  return (
    <>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />{' '}
      <IconButton
        onClick={onClick}
        iconName={iconName}
        variant={variant}
        disabled={disabled}
      />
    </>
  )
}

//mettere input precedentemente creato
// creare styled per il div
