import { memo, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { StyledLayout, StyledMain } from './styled'
import { Header } from '../Header'
import { SideBar } from '../SideBar'

const LayoutComponent = () => {
  return (
    <StyledLayout>
      <Header />
      <StyledMain>
        <SideBar />
        <Outlet />
      </StyledMain>
    </StyledLayout>
  )
}

export const Layout = memo(LayoutComponent)
