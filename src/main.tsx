import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { store } from './store.ts'
import { persistor } from './store.ts'
import { Provider } from 'react-redux'

import App from './App.tsx'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
