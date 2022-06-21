import { SOLANA_LAMPORTS_FEE } from "../../../../../../../../../const/solanaLamportsFee"
import { IGroupedWallets } from "../../../../../../../types/types"

interface IPrams {
  groupedWallets: IGroupedWallets
  amountLamportsToSpread: number
}

export const getEqualAmountLamports = (params: IPrams) => {
  const { groupedWallets, amountLamportsToSpread } = params

  if (!amountLamportsToSpread) {
    return 0
  }
  const { main, slots } = groupedWallets

  const feeLamports = slots.length * SOLANA_LAMPORTS_FEE
  const mainsLamports = main.amountLamports - feeLamports
  const spreadAmount = Number(amountLamportsToSpread) 

  if (spreadAmount !== NaN && mainsLamports > spreadAmount) {
    const fixedAmountLamports = Number((spreadAmount / slots.length).toFixed())

    return fixedAmountLamports
  }

  return 0
}
