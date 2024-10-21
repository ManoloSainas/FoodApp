import { createContext, memo, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { StyledHeader, StyledLayout, StyledOutlet, StyledSideBar } from './styled'
import { Header } from './Header'
import { SideBar } from './SideBar'

export const TextContext = createContext<string>('')
export const CurrencyContext = createContext<string>('')

const LayoutComponent = () => {
  const [searchedText, setSearchedText] = useState('')
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD')

  return (
    <StyledLayout>
      <StyledHeader>
        <Header
          setSearchedText={setSearchedText}
          setSelectedCurrency={setSelectedCurrency}
        />
      </StyledHeader>

      <StyledSideBar>
        <SideBar />
      </StyledSideBar>

      <StyledOutlet>
        <TextContext.Provider value={searchedText}>
          <CurrencyContext.Provider value={selectedCurrency}>
            <Outlet />
          </CurrencyContext.Provider>
        </TextContext.Provider>
      </StyledOutlet>
    </StyledLayout>
  )
}

export const Layout = memo(LayoutComponent)
