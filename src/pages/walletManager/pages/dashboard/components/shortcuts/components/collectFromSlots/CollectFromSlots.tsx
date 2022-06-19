import { useConnection } from "@solana/wallet-adapter-react"
import { useDispatch, useSelector } from "react-redux"
import { walletManagerActions } from "../../../../../../store/walletManager.reducer"
import { selectGroupedWallets } from "../../../../../../store/walletManager.selectors"
import { getTransactionConfig } from "../../../../../../utils/getTransactionConfig"
import { sendLamports } from "../../../../../../utils/sendLamports"
import { getWalletsThatCouldSendLamports } from "../../utils/getWalletsThatCouldSendLamports"
import ShortcutBase from "../shortcutBase/ShortcutBase"
import { getAmountSOLAfterReceiving } from "./utils/getAmountSOLAfterReceiving"

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

  return (
    <ShortcutBase onClick={handleClick} title="Collect from slots">
      <div>
        <p>{`Main's balance will be ${getAmountSOLAfterReceiving(groupedWallets)}`}</p>
      </div>
    </ShortcutBase>
  )
}

export default CollectFromSlots


