import { createContext, memo, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { StyledLayout, StyledMain } from './styled'
import { Header } from '../Header'
import { SideBar } from '../SideBar'

export const TextContext = createContext<string>('')
export const CurrencyContext = createContext<string | string[]>('')

const LayoutComponent = () => {
  const [searchedText, setSearchedText] = useState('')
  const [selectedCurrency, setSelectedCurrency] = useState<string | string[]>('USD')

  return (
    <StyledLayout>
      <Header
        setSearchedText={setSearchedText}
        setSelectedCurrency={setSelectedCurrency}
      />
      <StyledMain>
        <SideBar />
        <TextContext.Provider value={searchedText}>
          <CurrencyContext.Provider value={selectedCurrency}>
            <Outlet />
          </CurrencyContext.Provider>
        </TextContext.Provider>
      </StyledMain>
    </StyledLayout>
  )
}

export const Layout = memo(LayoutComponent)
