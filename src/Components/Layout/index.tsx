import { memo, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { StyledLayout, StyledMain } from './styled'
import { Header } from '../Header'
import { SideBar } from '../SideBar'

const LayoutComponent = () => {
  const [text, setText] = useState('')
  console.log('testo corrente: ', text)

  return (
    <StyledLayout>
      <Header setText={setText} />
      <StyledMain>
        <SideBar />
        <Outlet />
      </StyledMain>
    </StyledLayout>
  )
}

export const Layout = memo(LayoutComponent)
