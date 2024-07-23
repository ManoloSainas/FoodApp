import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from './store.ts'
import { persistor } from './store.ts'
import { Provider } from 'react-redux'

import App from './App.tsx'
import { PersistGate } from 'redux-persist/integration/react'

// Utilizza ReactDOM per creare un root e renderizzare l'applicazione
ReactDOM.createRoot(document.getElementById('root')!).render(
  // Utilizza React.StrictMode per identificare potenziali problemi nell'app
  <React.StrictMode>
    {/* Provider rende lo store Redux disponibile a tutti i componenti annidati */}
    <Provider store={store}>
      {/* PersistGate ritarda il rendering dell'app fino al recupero dello stato persistente */}
      <PersistGate loading={null} persistor={persistor}>
        {/* App è il componente principale dell'applicazione */}
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
