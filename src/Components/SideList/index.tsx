import { useState, useEffect, useCallback } from 'react'
import { Icon } from '../../Shared Components/Icon'
import { IconName } from '../../Shared Components/Icon/config'
import { Text } from '../../Shared Components/Text'
import { StyledRow, StyledSideList } from './styled'
import { Stack } from '../../Shared Components/Stack'
import { Link } from 'react-router-dom'

type Props = {
  options: { icon: IconName; text: string }[]
  onChange: (icon: IconName) => void
}

export const SideList = ({ options, onChange }: Props) => {
  const [selectedRow, setSelectedRow] = useState<IconName>(() => {
    const savedIcon = localStorage.getItem('selectedRow')
    return savedIcon ? (savedIcon as IconName) : options[0].icon
  })

  useEffect(() => {
    localStorage.setItem('selectedRow', selectedRow)
  }, [selectedRow])

  const handleClick = useCallback(
    (icon: IconName) => {
      setSelectedRow(icon)
      onChange(icon)
    },
    [onChange]
  )

  return (
    <StyledSideList>
      {options.map(({ icon, text }) => (
        <Link key={icon} to={`/${icon}`}>
          <StyledRow onClick={() => handleClick(icon)} isSelected={selectedRow === icon}>
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
