import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import counterReducer from './reducers/counterReducer'

const counterPersistConfig = {
  key: 'counter',
  storage
}

const persistedCounterReducer = persistReducer(counterPersistConfig, counterReducer)

const store = configureStore({
  reducer: {
    counter: persistedCounterReducer
  }
})

const persistor = persistStore(store)

export { store, persistor }
