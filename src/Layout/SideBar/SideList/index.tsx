import { useState, useEffect, useCallback } from 'react'
import { Icon } from '../../../shared components/Icon'
import { IconName } from '../../../shared components/Icon/config'
import { Text } from '../../../shared components/Text'
import { StyledRow, StyledSideList } from './styled'
import { Stack } from '../../../shared components/Stack'
import { Link, useLocation } from 'react-router-dom'

type Props = {
  options: { icon: IconName; text: string }[]
  onChange: () => void
}

export const SideList = ({ options, onChange }: Props) => {
  const location = useLocation()

  // Inizialmente selectedRow corrisponde al valore salvato in sessionStorage, altrimenti è il primo valore dell'array options
  const [selectedRow, setSelectedRow] = useState<IconName>(() => {
    const savedIcon = sessionStorage.getItem('selectedRow')
    return savedIcon ? (savedIcon as IconName) : options[0].icon
  })

  // Recupera il valore corrente del path e lo confronta con i valori dell'array options, se esiste allora cambia il valore di selectedRow
  useEffect(() => {
    const currentPath = location.pathname.substring(1)
    const matchedOption = options.find((option) => option.icon === currentPath)
    if (matchedOption) {
      setSelectedRow(matchedOption.icon)
    }
  }, [location.pathname, options])

  // Salva il valore di selectedRow in sessionStorage in modo che possa essere recuperato al refresh della pagina
  useEffect(() => {
    sessionStorage.setItem('selectedRow', selectedRow)
  }, [selectedRow])

  const handleClick = useCallback(
    (icon: IconName) => {
      setSelectedRow(icon)
      onChange()
    },
    [onChange]
  )

  return (
    <StyledSideList>
      {options.map(({ icon, text }) => (
        <Link key={icon} to={`/${icon}`}>
          <StyledRow onClick={() => handleClick(icon)} $isSelected={selectedRow === icon}>
            <Stack width="75px">
              <Icon id="iconId" iconName={icon} />
            </Stack>
            <Text>{text}</Text>
          </StyledRow>
        </Link>
      ))}
    </StyledSideList>
  )
}
