import { SOLANA_LAMPORTS_FEE } from "../../../../../../constants/solanaLamportsFee"
import { IPrivateWallet } from "../../../../types/types"

export const getWalletsThatCouldSendLamports = (wallets: IPrivateWallet[]) => {
  return wallets.filter((wallet) => wallet.amountLamports > SOLANA_LAMPORTS_FEE )
}
