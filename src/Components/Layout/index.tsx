import { createContext, memo, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { StyledLayout, StyledMain } from './styled'
import { Header } from '../Header'
import { SideBar } from '../SideBar'

export const TextContext = createContext<string>('')

const LayoutComponent = () => {
  const [searchedText, setSearchedTextText] = useState('')

  return (
    <StyledLayout>
      <Header setText={setSearchedTextText} />
      <StyledMain>
        <SideBar />
        <TextContext.Provider value={searchedText}>
          <Outlet />
        </TextContext.Provider>
      </StyledMain>
    </StyledLayout>
  )
}

export const Layout = memo(LayoutComponent)
