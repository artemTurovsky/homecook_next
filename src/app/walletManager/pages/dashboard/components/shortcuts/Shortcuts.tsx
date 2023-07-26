
import { useSelector } from 'react-redux'

import { useRequestWalletsBalance } from '../../../../hooks/useRequestWalletsBalance'
import { selectRawPrivateWallets } from '../../../../store/walletManager.selectors'
import CollectFromSlots from './components/collectFromSlots/CollectFromSlots'
import FulfillSlots from './components/fulfillSlots/FulfillSlots'
import Signatures from './components/signatures/Signatures'
import SpreadAmount from './components/spreadAmount/SpreadAmount'
import SpreadEqually from './components/spreadEqually/SpreadEqually'

import s from './Shortcuts.module.sass'

const Shortcuts = () => {
  const getWalletsBalance = useRequestWalletsBalance(true)
  const rawPrivateWallets = useSelector(selectRawPrivateWallets)

  const handleGetPrivateWallets = () => {
    getWalletsBalance(rawPrivateWallets)
  }

  return (
    <div className={s.root}>
      <div className={s.headerContainer}>
        <p className={s.header}>Shortcuts</p>

        <div className={s.toolsContainer}>
          <Signatures/>
          <button onClick={handleGetPrivateWallets} className={s.button}>Update wallets</button>
        </div>
      </div>

      <div className={s.shortcutsContainer}>
        <CollectFromSlots/>
        <SpreadEqually/>
      </div>
      <div className={s.shortcutsContainer}>
        <FulfillSlots />
        <SpreadAmount />
      </div>
    </div>
  )
}

export default Shortcuts
