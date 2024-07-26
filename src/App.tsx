import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import { Layout } from './Components/Layout'
import { Catalog } from './Pages/Catalog'
import { Home } from './Pages/Home'
import { useEffect } from 'react'
import { ShoppingCart } from './Pages/ShoppingCart/index'

// Definisce un componente funzionale RedirectToHome per reindirizzare l'utente alla pagina /home
function RedirectToHome() {
  // Utilizza il hook useNavigate per ottenere la funzione di navigazione
  const navigate = useNavigate()

  // Utilizza useEffect per eseguire la navigazione quando il componente viene montato
  useEffect(() => {
    navigate('/home') // Naviga alla pagina /home
  }, [navigate]) // Dipendenze dell'effetto, se `navigate` cambia, l'effetto viene rieseguito

  return null // Il componente non renderizza nulla
}

// Definisce il componente principale App
function App() {
  return (
    // Utilizza BrowserRouter come router di alto livello con un basename "/"
    <BrowserRouter basename="/">
      {/* Routes contiene tutte le rotte dell'applicazione */}
      <Routes>
        {/* Route principale che renderizza il componente Layout per il path "/" */}
        <Route path="/" element={<Layout />}>
          {/* Route index che utilizza RedirectToHome per reindirizzare automaticamente a "/home" */}
          <Route index element={<RedirectToHome />} />
          {/* Definisce le varie rotte dell'applicazione e i componenti da renderizzare */}
          <Route path="/home" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />

          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/map" element="To-do" />
          <Route path="/Delivery" element="To-do" />
          <Route path="/Settings" element="To-do" />

          <Route path="/shoppingCart" element={<ShoppingCart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

// Esporta il componente App per essere utilizzato in altri file
export default App
