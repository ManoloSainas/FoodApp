import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // storage di default per il web
import cartReducer from '../features/cart/reducer'
import currencyReducer from '../features/currency/reducer'

// --------------------------------------------------------------------------------------

const cartPersistConfig = {
  key: 'cart',
  storage
}

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer)

// --------------------------------------------------------------------------------------

const currencyPersistConfig = {
  key: 'currency',
  storage
}

const persistedCurrencyReducer = persistReducer(currencyPersistConfig, currencyReducer)

// --------------------------------------------------------------------------------------

// Configura lo store Redux con il reducer persistente.
const store = configureStore({
  reducer: {
    cart: persistedCartReducer, // Associa il reducer persistente allo store
    currency: persistedCurrencyReducer
  }
})

// Crea un persistor per lo store, che permette di salvare e ripristinare lo stato.
const persistor = persistStore(store)

// Esporta lo store e il persistor per essere utilizzati nell'applicazione.
export { store, persistor }