import { IState } from "../../_store/rootReducer"

const selectWalletManagerSlice = (state: IState) => {
  return state.walletManager
}

export const selectGroupedWallets = (state: IState) => {
  return selectWalletManagerSlice(state).groupedWallets
}

export const selectRawPrivateWallets = (state: IState) => {
  return selectWalletManagerSlice(state).rawPrivateWallets
}

export const selectPrivateWallets = (state: IState) => {
  return selectWalletManagerSlice(state).privateWallets
}

export const selectSignatures = (state: IState) => {
  return selectWalletManagerSlice(state).signatures
}

export const selectDashboardLoading = (state: IState) => {
  return selectWalletManagerSlice(state).sectionsLoading.dashboard
}

export const selectSetWalletsLoading = (state: IState) => {
  return selectWalletManagerSlice(state).sectionsLoading.setWallets
}

export const selectSolFormLoading = (state: IState) => {
  return selectWalletManagerSlice(state).sectionsLoading.solForm
}
