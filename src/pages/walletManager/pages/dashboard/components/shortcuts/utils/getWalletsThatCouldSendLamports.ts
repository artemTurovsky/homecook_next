import { SOLANA_LAMPORTS_FEE } from "../../../../../../../const/solanaLamportsFee"
import { IPrivateWallet } from "../../../../../types/types"

export const getWalletsThatCouldSendLamports = (wallets: IPrivateWallet[]) => {
  return wallets.filter((wallet) => wallet.amountLamports > SOLANA_LAMPORTS_FEE )
}
