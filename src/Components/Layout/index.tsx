import { memo, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { StyledLayout, StyledMain } from './styled'
import { Header } from '../Header'
import { SideBar } from '../SideBar'

const LayoutComponent = () => {
  const [text, setText] = useState('')
  console.log('testo corrente:', text)

  // use outlet context!!!

  return (
    <StyledLayout>
      <Header setText={setText} />
      <StyledMain>
        <SideBar />
        <Outlet text={text} />
      </StyledMain>
    </StyledLayout>
  )
}

export const Layout = memo(LayoutComponent)
