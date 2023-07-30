import { combineReducers } from "@reduxjs/toolkit"
import walletManager from "./walletManager/walletManager.reducer"

const reducers = combineReducers({
  walletManager
})

export type IState = ReturnType<typeof reducers>
export default reducers
