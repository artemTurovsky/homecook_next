import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { SOLANA_LAMPORTS_FEE } from "../../../../../../../../../const/solanaLamportsFee"
import { IGroupedWallets } from "../../../../../../../types/types"
import { getWalletsThatCouldSendLamports } from "../../../utils/getWalletsThatCouldSendLamports"

export const getAmountSOLAfterReceiving = (groupedWallets: IGroupedWallets) => {
  const slotsWithBalance = getWalletsThatCouldSendLamports(groupedWallets.slots)

  const amountLamportsToReceive = slotsWithBalance.reduce((acc, curr) => {
    const amountAfterFee = curr.amountLamports - SOLANA_LAMPORTS_FEE
    return acc + amountAfterFee
  }, 0)

  const mainPossibleBalance = groupedWallets.main.amountLamports + amountLamportsToReceive

  return mainPossibleBalance / LAMPORTS_PER_SOL
}
