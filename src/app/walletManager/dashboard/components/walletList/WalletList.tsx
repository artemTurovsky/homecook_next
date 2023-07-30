
import { useSelector } from 'react-redux'
import { selectGroupedWallets } from '../../../store/walletManager.selectors'
import { IGroupedWallets } from '../../../types/types'
import WalletGroup from './components/walletGroup/WalletGroup'
import s from './WalletList.module.sass'

interface IProps {
  groupedWallets: IGroupedWallets
}

const WalletList = ({ groupedWallets }: IProps) => {
  return (
    <div className={s.root}>
      <WalletGroup wallet={groupedWallets.main} />

      <WalletGroup wallet={groupedWallets.slots} />
    </div>
  )
}

export default WalletList
