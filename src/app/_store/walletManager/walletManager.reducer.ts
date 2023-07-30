import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EWalletManagerPages } from "../../walletManager/enums/enums";
import { IGroupedWallets, IPrivateWallet, IRawPrivateWallet } from "../../walletManager/types/types";

type TSectionsLoading = {
  [key in EWalletManagerPages]: boolean
}

interface IReducer {
  rawPrivateWallets: IRawPrivateWallet[] | null
  privateWallets: IPrivateWallet[] | null
  groupedWallets: IGroupedWallets | null
  signatures: string[]
  sectionsLoading: TSectionsLoading
}

const initialState: IReducer = {
  rawPrivateWallets: null,
  privateWallets: null,
  groupedWallets: null,
  signatures: [],
  sectionsLoading: {
    solForm: false,
    dashboard: false,
    setWallets: false,
  }
}

const createdReducer = createSlice({
  name: 'walletManager',
  initialState,
  reducers: {
    setRawPrivateWallets: (state, action: PayloadAction<IRawPrivateWallet[]>) => {
      state.rawPrivateWallets = action.payload
    },
    setPrivateWallets: (state, action: PayloadAction<IRawPrivateWallet[]>) => {
      state.rawPrivateWallets = action.payload
    },
    setGroupedWallets: (state, action: PayloadAction<IGroupedWallets>) => {
      state.groupedWallets = action.payload
    },
    setSignatures: (state, action: PayloadAction<string[]>) => {
      state.signatures = [...state.signatures, ...action.payload]
    },
    setSectionsLoading: (state, action: PayloadAction<{ section: EWalletManagerPages, value: boolean}>) => {
      const { section, value } = action.payload
      state.sectionsLoading[section] = value
    },
    clearWalletManagerSlice: () => {
      return initialState
    }
  }
})

export const walletManagerActions = createdReducer.actions
export default createdReducer.reducer
