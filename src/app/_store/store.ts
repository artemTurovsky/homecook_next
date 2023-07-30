import { configureStore } from '@reduxjs/toolkit'

import reducer from './rootReducer'

const store = configureStore({
  reducer,
  devTools: true
})

export default store
