import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './Components/Layout'
import { Catalog } from './Pages/Catalog'
import { Home } from './Pages/Home'

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />}>
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
