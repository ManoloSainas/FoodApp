import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { Layout } from './Components/Layout'
import { Catalog } from './Pages/Catalog'
import { Home } from './Pages/Home'
import { createContext, useEffect } from 'react'

function RedirectToHome() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/home')
  }, [navigate])

  return null
}

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RedirectToHome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/category" element="To-do" />
          <Route path="/map" element="To-do" />
          <Route path="/Delivery" element="To-do" />
          <Route path="/Settings" element="To-do" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

// ListItem,
// List -> props = items[] -> map((el) => <listItem )
