import { useConnection } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { ChangeEvent, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import AmountSol from "../../../../../../../../components/amountSol/AmountSol"
import { selectGroupedWallets } from "../../../../../../store/walletManager.selectors"
import { getTransactionConfig } from "../../../../../../utils/getTransactionConfig"
import { sendLamports } from "../../../../../../utils/sendLamports"
import ShortcutBase from "../shortcutBase/ShortcutBase"
import { getEquallySplitAmount } from "../spreadEqually/utils/getEquallySplitAmount"
import { getMaxPossibleEqualAmount } from "./utils/getMaxPossibleEqualAmount"

import s from './SpreadAmount.module.sass'
import { getEqualAmountLamports } from "./utils/getEqualAmountLamports"
import { walletManagerActions } from "../../../../../../store/walletManager.reducer"

const SpreadAmount = () => {
  const { connection } = useConnection()
  const groupedWallets = useSelector(selectGroupedWallets)
  const dispatch = useDispatch()
  const [amountLamportsToSpread, setAmountLamportsToSpread] = useState(0)
  const [inputValue, setInputValue] = useState('')

  if (!groupedWallets) {
    return null
  }

  const equalAmountLamports = getEqualAmountLamports({ groupedWallets, amountLamportsToSpread })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const amountSol = e.target.value
    const numberAmountOfSol = Number(amountSol)

    setInputValue(amountSol)

    if (!amountSol || numberAmountOfSol === NaN) {
      setAmountLamportsToSpread(0)

      return 
    }

    const amountLamports = numberAmountOfSol * LAMPORTS_PER_SOL

    setAmountLamportsToSpread(amountLamports)
  }

  const handleClick = async () => {
    if (!equalAmountLamports) {
      return
    }

    const transactionConfigs = groupedWallets.slots.map((slot) => {
      return getTransactionConfig({ target: slot, source: groupedWallets.main, amount: equalAmountLamports })
    })

    try {
      const signatures = await Promise.all(transactionConfigs.map((transactionConfig, idx) => {
        return sendLamports({ connection, transactionConfig, sleepMS: idx * 500 })
      }))

      dispatch(walletManagerActions.setSignatures(signatures))
    } catch (error) {
      console.error('SpreadAmount error', error)
    }
  }

  return (
    <ShortcutBase onClick={handleClick} title="Spread Amount">
      <div>
        <div className={s.amount}>
          <p>Available</p>
          <AmountSol amountLamports={groupedWallets.main.amountLamports} solAfter />
        </div>
        
        <div className={s.amount}>
          <input value={inputValue} onChange={handleChange} type='text'/>
          <p>SOL</p>
        </div>
        <div className={s.amount}>
          <p>Each slot balance</p>
          <AmountSol amountLamports={equalAmountLamports} solAfter />
        </div>
      </div>
    </ShortcutBase>
  )
}

export default SpreadAmount
