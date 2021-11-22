import { createSlice } from '@reduxjs/toolkit'

export const converterSlice = createSlice({
  name: 'converter',
  initialState: {
    results: {},
    currencyRate: 0,
    exchanges: []
  },
  reducers: {
    addResluts: (state, action) => {
      state.results = action.payload
    },
    changeCurrency: (state, action) => {
      state.currencyRate = action.payload
    },
    addExchanges: (state, action) => {
      state.exchanges = action.payload
    }
  }
})

export const { addResluts, changeCurrency, addExchanges } = converterSlice.actions

export default converterSlice.reducer