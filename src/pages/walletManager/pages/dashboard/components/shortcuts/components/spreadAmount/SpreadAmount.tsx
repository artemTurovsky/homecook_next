import { useConnection } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { ChangeEvent, useState } from "react"
import { getTransactionConfig } from "../../../../../../utils/getTransactionConfig"
import { sendLamports } from "../../../../../../utils/sendLamports"
import ShortcutBase from "../shortcutBase/ShortcutBase"
import { getEquallySplitAmount } from "../spreadEqually/utils/getEquallySplitAmount"

const SpreadAmount = () => {
  // const { connection } = useConnection()
  // const [isLeaveSameAmountOnMain, setIsLeaveSameAmountOnMain] = useState(false)
  // const { privateWallets } = walletManagerContext

  // if (!privateWallets) {
  //   return null
  // }

  // const splitLamports = getEquallySplitAmount({ privateWallets, isLeaveSameAmountOnMain })

  // const handleClick = async () => {
  //   const { slots, main } = privateWallets

  //   const transactionConfigs = slots.map((slot) => {
  //     return getTransactionConfig({ target: slot, source: main, amount: splitLamports })
  //   })

  //   try {
  //     const signatures = await Promise.all(transactionConfigs.map((transactionConfig, idx) => {
  //       return sendLamports({ connection, transactionConfig, sleepMS: idx * 500 })
  //     }))

  //     walletManagerContext.setSignatures(signatures)
  //   } catch (error) {
  //     console.log('SpreadSOL error', error)
  //   }
  // }

  // const handleChangeKeepSameOnMain = (e: ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.checked
  //   setIsLeaveSameAmountOnMain(value)
  // }

  // return (
  //   <ShortcutBase onClick={handleClick} title="Spread Amount">
  //     <div>
  //       <p>{`${splitLamports / LAMPORTS_PER_SOL} SOL on each ${isLeaveSameAmountOnMain ? 'wallet' : 'slot'}`}</p>
  //       <div>
  //         <input onChange={handleChangeKeepSameOnMain} type='checkbox'/>
  //         <span>Include main</span>
  //       </div>
  //     </div>
  //   </ShortcutBase>
  // )

  return <div/>
}

export default SpreadAmount
