import { createContext, memo, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { StyledLayout, StyledMain } from './styled'
import { Header } from '../Header'
import { SideBar } from '../SideBar'

export const TextContext = createContext<string>('')

const LayoutComponent = () => {
  const [searchedText, setSearchedText] = useState('')

  return (
    <StyledLayout>
      <Header setSearchedText={setSearchedText} />
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
