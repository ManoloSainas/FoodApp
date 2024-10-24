import { Avatar } from '../../shared components/Avatar'
import { SideList } from './SideList'
import { StyledSideBarComponent } from './styled'
import { useCallback } from 'react'

export const SideBar = () => {
  const changePage = useCallback(() => {
    console.log()
  }, [])

  return (
    <StyledSideBarComponent>
      <Avatar imageUrl="src/assets/Images/cheong.jpg" text="Joseph Cheong" />
      <SideList
        onChange={changePage}
        options={[
          { icon: 'Home', text: 'Home' },
          { icon: 'Catalog', text: 'Catalog' },
          { icon: 'ShoppingCart', text: 'Cart' },
          { icon: 'Map', text: 'Map' },
          { icon: 'Delivery', text: 'Delivery' },
          { icon: 'Settings', text: 'Settings' }
        ]}
      />
    </StyledSideBarComponent>
  )
}
