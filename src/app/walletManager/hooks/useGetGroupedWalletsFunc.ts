import { useConnection } from "@solana/wallet-adapter-react"
import { useDispatch } from "react-redux"
import { parsePrivateKey } from "../../../utils/parseSecretKey"
import { sleep } from "../../../utils/sleep"
import { walletManagerActions } from "../../_store/walletManager/walletManager.reducer"
import { IGroupedWallets, IPrivateWallet, IRawPrivateWallet } from "../types/types"

const { setPrivateWallets } = walletManagerActions

export const useGetGroupedWalletsFunc = () => {
  const { connection } = useConnection()
  const dispatch = useDispatch()

  const getWalletBalanceLamports = async (wallet: IRawPrivateWallet) => {
    try {
      const { publicKey } = parsePrivateKey(wallet.privateKey)
  
      const balance = await connection.getBalance(publicKey, 'finalized')
  
      return balance
    } catch (error) {
      console.error('getWalletBalance', error)
    }
  }

  return async (wallets: IRawPrivateWallet[]) => {
    const plainPrivateWallets = await Promise.all(wallets.map(async (wallet, idx) => {
      await sleep(500 * idx)

      const walletLamports = await getWalletBalanceLamports(wallet) || 0

      return {...wallet, amountLamports: walletLamports} as IPrivateWallet
    }))

    const sortedWallets = plainPrivateWallets.sort((first, second) => first.order - second.order)
    dispatch(setPrivateWallets(sortedWallets))
    const [main, ...slots] = sortedWallets

    const privateWallets: IGroupedWallets = {
      main,
      slots
    }

    return privateWallets
  }
}
