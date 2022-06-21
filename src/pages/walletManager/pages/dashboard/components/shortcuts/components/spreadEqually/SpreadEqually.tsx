import { useConnection } from "@solana/wallet-adapter-react"
import { ChangeEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import AmountSol from "../../../../../../../../components/amountSol/AmountSol"
import { walletManagerActions } from "../../../../../../store/walletManager.reducer"
import { selectGroupedWallets } from "../../../../../../store/walletManager.selectors"
import { getTransactionConfig } from "../../../../../../utils/getTransactionConfig"
import { sendLamports } from "../../../../../../utils/sendLamports"
import ShortcutBase from "../shortcutBase/ShortcutBase"
import { getEquallySplitAmount } from "./utils/getEquallySplitAmount"

import s from './SpreadEqually.module.sass'

const SpreadEqually = () => {
  const { connection } = useConnection()
  const [isLeaveSameAmountOnMain, setIsLeaveSameAmountOnMain] = useState(false)
  const [slotAmount, setSlotAmount] = useState('')
  const groupedWallets = useSelector(selectGroupedWallets)
  const dispatch = useDispatch()

  useEffect(() => {
    groupedWallets && setSlotAmount(String(groupedWallets.slots.length))
  }, [groupedWallets])

  if (!groupedWallets) {
    return null
  }

  const splitLamports = getEquallySplitAmount({ main: groupedWallets.main, isLeaveSameAmountOnMain, slotAmount: Number(slotAmount) })

  const handleClick = async () => {
    const { slots, main } = groupedWallets

    const exactNumberOfSlots = slots.slice(0, Number(slotAmount))

    const transactionConfigs = exactNumberOfSlots.map((slot) => {
      return getTransactionConfig({ target: slot, source: main, amount: splitLamports })
    })

    try {
      const signatures = await Promise.all(transactionConfigs.map((transactionConfig, idx) => {
        return sendLamports({ connection, transactionConfig, sleepMS: idx * 500 })
      }))

      dispatch(walletManagerActions.setSignatures(signatures))
    } catch (error) {
      console.error('SpreadSOL error', error)
    }
  }

  const handleChangeKeepSameOnMain = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked
    setIsLeaveSameAmountOnMain(value)
  }

  const handleChangeNumberOfSlots = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setSlotAmount(value)
  }

  return (
    <ShortcutBase onClick={handleClick} title="Spread Equally">
      <div>
        <div className={s.amount}>
          <p>{`On each ${isLeaveSameAmountOnMain ? 'wallet' : 'slot'}`}</p>
          <AmountSol amountLamports={splitLamports} solAfter/>
        </div>
        <div className={s.inputContainer}>
          <input className={s.input} onChange={handleChangeKeepSameOnMain} type='checkbox'/>
          <span>Include main</span>
        </div>
        <div className={s.amount}>
          <p>Number of slots</p>
          <input value={slotAmount} onChange={handleChangeNumberOfSlots} type='text'/>
        </div>
      </div>
    </ShortcutBase>
  )
}

export default SpreadEqually
