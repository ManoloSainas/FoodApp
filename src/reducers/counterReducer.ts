// Importa la funzione createSlice da Redux Toolkit e WritableDraft da immer
import { createSlice } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer'

// Crea un "slice" di stato denominato 'counter' con Redux Toolkit
export const counterSlice = createSlice({
  name: 'counter', // Nome dello slice, utilizzato nelle azioni
  initialState: {
    // Stato iniziale dello slice
    value: 0 // Proprietà 'value' inizializzata a 0
  },
  reducers: {
    // Oggetto contenente i reducer per modificare lo stato
    increment: (state) => {
      // Reducer per incrementare 'value' di 1
      state.value += 1
    },
    decrement: (state) => {
      // Reducer per decrementare 'value' di 1
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      // Reducer per incrementare 'value' di un valore specifico
      state.value += action.payload // 'action.payload' contiene il valore specifico per l'incremento
    }
  }
})

// Esporta le azioni generate automaticamente da createSlice
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Selettore per ottenere il valore di 'value' dallo stato
export const selectCount = (
  state: WritableDraft<{ value: number; counter: { value: number } }>
) => state.counter.value

// Esporta il reducer dello slice
export default counterSlice.reducer
