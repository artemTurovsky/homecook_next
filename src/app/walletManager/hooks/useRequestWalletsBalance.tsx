import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { EWalletManagerPages } from "../enums/enums"
import { walletManagerActions } from "../store/walletManager.reducer"
import { selectRawPrivateWallets } from "../store/walletManager.selectors"
import { IRawPrivateWallet } from "../types/types"
import { useGetGroupedWalletsFunc } from "./useGetGroupedWalletsFunc"

const { setSectionsLoading, setGroupedWallets } = walletManagerActions

export const useRequestWalletsBalance = (dontRequestOnLoad?: boolean) => {
  const dispatch = useDispatch()
  const rawPrivateWallets = useSelector(selectRawPrivateWallets)
  const getGroupedWallets = useGetGroupedWalletsFunc()

  const handleGetPrivateWallets = async (wallets: IRawPrivateWallet[] | null) => {
    if (wallets) {
      try {
        dispatch(setSectionsLoading({ section: EWalletManagerPages.dashboard, value: true }))

        const privateWallets = await getGroupedWallets(wallets)

        dispatch(setGroupedWallets(privateWallets))
      } catch (error) {
        console.error('handleGetPrivateWallets', error)
      } finally {
        dispatch(setSectionsLoading({ section: EWalletManagerPages.dashboard, value: false }))
      }
    }

    return
  }

  useEffect(() => {
    if (rawPrivateWallets && !dontRequestOnLoad) {
      handleGetPrivateWallets(rawPrivateWallets)
    }
  }, [])

  return handleGetPrivateWallets
}
