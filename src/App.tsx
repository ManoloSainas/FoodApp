import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { Layout } from './Layout'
import { Home } from './Pages/Home'
import { Catalog } from './Pages/Catalog'
import { ProductDetails } from './Pages/Catalog/ProductDetails'
import { Cart } from './Pages/Cart'

// Componenti principale dell'applicazione
function App() {
  return (
    // Router per le pagine web
    <BrowserRouter basename="/">
      {/* Routes contiene tutte le pagine dell'applicazione */}
      <Routes>
        {/* Route principale che renderizza il componente Layout per il path "/" */}
        <Route path="/" element={<Layout />}>
          {/* Route index che utilizza Navigate per reindirizzare automaticamente a "/home" */}
          <Route index element={<Navigate to="/home" />} />
          {/* Definisce le varie rotte dell'applicazione e i componenti da renderizzare */}
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/shoppingCart" element={<Cart />} />
          <Route path="/map" element="To-do" />
          <Route path="/Delivery" element="To-do" />
          <Route path="/Settings" element="To-do" />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// Esporta il componente App per essere utilizzato in altri file
export default App
