import { useConnection } from "@solana/wallet-adapter-react"
import { useDispatch, useSelector } from "react-redux"

import AmountSol from "../../../../../../../../components/amountSol/AmountSol"
import { walletManagerActions } from "../../../../../../store/walletManager.reducer"
import { selectGroupedWallets } from "../../../../../../store/walletManager.selectors"
import { getTransactionConfig } from "../../../../../../utils/getTransactionConfig"
import { sendLamports } from "../../../../../../utils/sendLamports"
import { getWalletsThatCouldSendLamports } from "../../utils/getWalletsThatCouldSendLamports"
import ShortcutBase from "../shortcutBase/ShortcutBase"
import { getAmountSolAfterReceiving } from "./utils/getAmount"

import s from './CollectFromSlots.module.sass'

const CollectFromSlots = () => {
  const { connection } = useConnection()
  const groupedWallets = useSelector(selectGroupedWallets)
  const dispatch = useDispatch()

  if (!groupedWallets) {
    return null
  }

  const handleClick = async () => {
    const slotsWithBalance = getWalletsThatCouldSendLamports(groupedWallets.slots)

    const transactionConfigs = slotsWithBalance.map((slot) => {
      return getTransactionConfig({ target: groupedWallets.main, source: slot })
    })

    try {
      const signatures = await Promise.all(transactionConfigs.map((transactionConfig) => {
        return sendLamports({ connection, transactionConfig })
      }))

      dispatch(walletManagerActions.setSignatures(signatures))
    } catch (error) {
      console.error('CollectFromSlots error', error)
    }
  }
  const amountLamportsToReceive = getAmountSolAfterReceiving(groupedWallets.slots)
  const mainBalanceAfterTransaction = groupedWallets.main.amountLamports + amountLamportsToReceive

  return (
    <ShortcutBase onClick={handleClick} title="Collect from slots">
      <div>
        <div className={s.amount}>
          <p>Collect</p>
          <AmountSol amountLamports={amountLamportsToReceive} solAfter />
        </div>
        <div className={s.amount}>
          <p>{"Main's balance"}</p>
          <AmountSol amountLamports={mainBalanceAfterTransaction} solAfter />
        </div>
      </div>
    </ShortcutBase>
  )
}

export default CollectFromSlots


