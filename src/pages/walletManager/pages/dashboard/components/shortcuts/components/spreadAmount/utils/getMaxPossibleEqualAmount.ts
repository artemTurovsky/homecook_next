import { IGroupedWallets } from "../../../../../../../types/types";

export const getMaxPossibleEqualAmount = (groupedWallets: IGroupedWallets) => {
  const { main, slots } = groupedWallets

  const sortedSlotsByBiggestSum = [...slots].sort((first, second) => second.amountLamports - first.amountLamports )
  

  // console.log(sortedSlotsByBiggestSum)
}
