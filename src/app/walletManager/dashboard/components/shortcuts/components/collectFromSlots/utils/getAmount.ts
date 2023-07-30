import { SOLANA_LAMPORTS_FEE } from "../../../../../../../../constants/solanaLamportsFee"
import { IPrivateWallet } from "../../../../../../types/types"
import { getWalletsThatCouldSendLamports } from "../../../utils/getWalletsThatCouldSendLamports"

export const getAmountSolAfterReceiving = (slots: IPrivateWallet[]) => {
  const slotsWithBalance = getWalletsThatCouldSendLamports(slots)

  const amountLamportsToReceive = slotsWithBalance.reduce((acc, curr) => {
    const amountAfterFee = curr.amountLamports - SOLANA_LAMPORTS_FEE
    return acc + amountAfterFee
  }, 0)


  return amountLamportsToReceive
}
