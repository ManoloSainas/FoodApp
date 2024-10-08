import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { Layout } from './Components/Layout'
import { Catalog } from './Pages/Catalog'
import { Home } from './Pages/Home'
import { useEffect } from 'react'
import { Cart } from './Pages/Cart/index'
import { ProductDetails } from './Pages/ProductDetails'

// Componente per reindirizzare automaticamente a "/home"
function RedirectToHome() {
  // Hook per navigare tra le pagine
  const navigate = useNavigate()

  // Utilizza useEffect per eseguire la navigazione quando il componente viene montato
  useEffect(() => {
    navigate('/home')
  }, [navigate])

  return null
}

// Componenti principale dell'applicazione
function App() {
  return (
    // Router per le pagine web
    <BrowserRouter basename="/">
      {/* Routes contiene tutte le pagine dell'applicazione */}
      <Routes>
        {/* Route principale che renderizza il componente Layout per il path "/" */}
        <Route path="/" element={<Layout />}>
          {/* Route index che utilizza RedirectToHome per reindirizzare automaticamente a "/home" */}
          <Route index element={<RedirectToHome />} />

          {/* Definisce le varie rotte dell'applicazione e i componenti da renderizzare */}
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/shoppingCart" element={<Cart />} />
          <Route path="/map" element="To-do" />
          <Route path="/Delivery" element="To-do" />
          <Route path="/Settings" element="To-do" />
          <Route path="/shoppingCart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// Esporta il componente App per essere utilizzato in altri file
export default App
