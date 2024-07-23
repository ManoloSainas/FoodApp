import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // storage di default per il web
import counterReducer from './reducers/counterReducer'
import cartReducer from './reducers/cartReducer'

// Configurazione per la persistenza del reducer del contatore.
const counterPersistConfig = {
  key: 'counter', // La chiave sotto cui salvare lo stato del contatore nel storage
  storage // Il meccanismo di storage da utilizzare (default: localStorage nel web)
}
// Applica la persistenza al counterReducer utilizzando la configurazione definita.
const persistedCounterReducer = persistReducer(counterPersistConfig, counterReducer)

// --------------------------------------------------------------------------------------

const cartPersistConfig = {
  key: 'cart',
  storage
}

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer)

// --------------------------------------------------------------------------------------

// Configura lo store Redux con il reducer persistente.
const store = configureStore({
  reducer: {
    counter: persistedCounterReducer, // Associa il reducer persistente allo store
    cart: persistedCartReducer
  }
})

// Crea un persistor per lo store, che permette di salvare e ripristinare lo stato.
const persistor = persistStore(store)

// Esporta lo store e il persistor per essere utilizzati nell'applicazione.
export { store, persistor }
