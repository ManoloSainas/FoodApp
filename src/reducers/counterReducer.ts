// Importa la funzione createSlice da Redux Toolkit e WritableDraft da immer
import { createSlice } from '@reduxjs/toolkit'
import { WritableDraft } from 'immer'

// Crea un "slice" di stato denominato 'counter' con Redux Toolkit
export const counterSlice = createSlice({
  name: 'counter', // Nome dello slice, utilizzato nelle azioni
  initialState: {
    value: 0
  },
  reducers: {
    // Oggetto contenente i reducer per modificare lo stato
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      // Reducer per incrementare 'value' di un valore specifico
      state.value += action.payload // 'action.payload' contiene il valore specifico per l'incremento
    }
  }
})

// Esempio di utilizzo di incrementByAmount in un component
// handleIncrement() -> dispatch(incrementAction) -> Redux Store ->
// -> Match 'incrementByAmount' in reducer -> Execute reducer code ->
// -> Update state -> (Re-render components, if necessary)

// const handleIncrement = () => {
//   const incrementAction = {
//     type: 'incrementByAmount',
//     payload: 5
//   };
//   dispatch(incrementAction);
// };

// Esporta le azioni generate automaticamente da createSlice
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Selettore per ottenere il valore di 'value' dallo stato
export const selectCount = (
  state: WritableDraft<{ value: number; counter: { value: number } }>
) => state.counter.value

// Esporta il reducer dello slice
export default counterSlice.reducer
