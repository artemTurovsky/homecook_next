import { configureStore } from '@reduxjs/toolkit'

import reducer from './rootReducer'

function makeStore() {
  return configureStore({
    reducer,
    devTools: true
  })
}

const store = makeStore()

export default store
