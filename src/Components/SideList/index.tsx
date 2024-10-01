import { useState, useEffect } from 'react'
import { Icon } from '../Icon'
import { IconName } from '../Icon/config'
import { Text } from '../Text'
import { StyledRow, StyledSideList } from './styled'
import { Stack } from '../Stack'
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

  const handleClick = (icon: IconName) => {
    setSelectedRow(icon)
    onChange(icon)
  }

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
