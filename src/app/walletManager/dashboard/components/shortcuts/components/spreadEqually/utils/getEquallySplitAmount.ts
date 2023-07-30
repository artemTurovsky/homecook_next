import { SOLANA_LAMPORTS_FEE } from "../../../../../../../../constants/solanaLamportsFee"
import { IPrivateWallet } from "../../../../../../types/types"

interface IParams {
  main: IPrivateWallet
  isLeaveSameAmountOnMain: boolean
  slotAmount: number
}

export const getEquallySplitAmount = (params: IParams) => {
  const { main, isLeaveSameAmountOnMain, slotAmount } = params

  const amountLamportsAfterFee = main.amountLamports - (slotAmount * SOLANA_LAMPORTS_FEE)

  const divider = isLeaveSameAmountOnMain ? slotAmount + 1 : slotAmount 
  const splitAmountLamports = amountLamportsAfterFee / divider

  return splitAmountLamports
}
