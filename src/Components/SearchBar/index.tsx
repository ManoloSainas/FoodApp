import { IconButton } from '../IconButton'
import { ButtonVariant } from '../Button/styled'
import { IconName } from '../Icon/config'
import { Input } from '../Form/Input'
import { StyledSearchBar } from './styled'

type Props = {
  onClick: () => void
  iconName: IconName
  variant?: ButtonVariant
  disabled?: boolean
  onChange: (e: string) => void
  type: string
  placeholder?: string
  value?: string
}

export const SearchBar = ({
  onClick,
  iconName,
  variant,
  disabled,
  onChange,
  type,
  placeholder,
  value
}: Props) => {
  return (
    <StyledSearchBar>
      <Input placeholder={placeholder} type={type} value={value} onChange={onChange} />
      <IconButton
        onClick={onClick}
        iconName={iconName}
        variant={variant}
        disabled={disabled}
      />
    </StyledSearchBar>
  )
}

//mettere input precedentemente creato
// creare styled per il div
