import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/App.css'
import { store } from './features/store.ts'
import { persistor } from './features/store.ts'
import { Provider } from 'react-redux'
import App from './App.tsx'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Utilizza ReactDOM per creare un root e renderizzare l'applicazione
ReactDOM.createRoot(document.getElementById('root')!).render(
  // Utilizza React.StrictMode per identificare potenziali problemi nell'app
  <React.StrictMode>
    {/* Provider rende lo store Redux disponibile a tutti i componenti annidati */}
    <Provider store={store}>
      {/* PersistGate ritarda il rendering dell'app fino al recupero dello stato persistente */}
      {/* La prop loading accetta un componente React che verrà renderizzato mentre lo stato è in fase di reidratazione. */}
      {/* La prop persistor è l'oggetto persistor creato dalla configurazione di Redux Persist.  */}
      <PersistGate loading={null} persistor={persistor}>
        {/* App è il componente principale dell'applicazione */}
        <App />
      </PersistGate>
    </Provider>
    <ToastContainer />
  </React.StrictMode>
)
