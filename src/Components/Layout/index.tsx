import { createContext, memo, useState, useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import { StyledLayout, StyledMain } from './styled'
import { Header } from '../Header'
import { SideBar } from '../SideBar'

export const TextContext = createContext<string>('')
export const CurrencyContext = createContext<string | string[]>('')

const LayoutComponent = () => {
  const [searchedText, setSearchedText] = useState('')
  const [selectedCurrency, setSelectedCurrency] = useState<string | string[]>('USD')

  const memoizedSearchedText = useMemo(() => searchedText, [searchedText])
  const memoizedSelectedCurrency = useMemo(() => selectedCurrency, [selectedCurrency])

  return (
    <StyledLayout>
      <Header
        setSearchedText={setSearchedText}
        setSelectedCurrency={setSelectedCurrency}
      />
      <StyledMain>
        <SideBar />
        <TextContext.Provider value={memoizedSearchedText}>
          <CurrencyContext.Provider value={memoizedSelectedCurrency}>
            <Outlet />
          </CurrencyContext.Provider>
        </TextContext.Provider>
      </StyledMain>
    </StyledLayout>
  )
}

export const Layout = memo(LayoutComponent)
