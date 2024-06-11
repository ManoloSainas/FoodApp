import React, { useState } from 'react'
import { Icon } from '../Icon'
import { ButtonVariant } from '../Button/styled'
import { IconName } from '../Icon/config'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { Button } from '../Button'
import { StyledIconButton } from './styled'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  onClick: () => void
  disabled?: boolean
  variant?: ButtonVariant
  iconName: IconName
  color?: string
  size?: FontAwesomeIconProps['size']
}>

export const IconButton = ({
  onClick,
  disabled,
  variant = 'primary',
  iconName,
  children,
  color,
  size
}: Props) => {
  const [buttonVariant, setButtonVariant] = useState(variant)
  const [iconVariant, setIconVariant] = useState(iconName)

  const handleClick = () => {
    onClick()
    setButtonVariant('redIcon')
    setIconVariant('Check')

    setTimeout(() => {
      setButtonVariant('primary')
      setIconVariant('Plus')
    }, 2000)
  }

  return (
    <StyledIconButton>
      <Button onClick={handleClick} disabled={disabled} variant={buttonVariant}>
        {children}
        <Icon iconName={iconVariant} color={color} size={size} />
      </Button>
    </StyledIconButton>
  )
}
