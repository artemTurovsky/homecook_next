import Wallet from "../wallet/Wallet"
import cn from 'classnames'
import s from './WalletGroup.module.sass'
import { IPrivateWallet } from "../../../../../../types/types"

interface IProps {
  wallet: IPrivateWallet | IPrivateWallet[]
}

const WalletGroup = ({ wallet }: IProps) => {
  const getComponent = () => {
    if (Array.isArray(wallet)) {
      return wallet.map((wallet) => {
        return <Wallet key={wallet.name} wallet={wallet} /> 
      })
    } else {
      return <Wallet wallet={wallet} /> 
    }
  }

  const getTitleText = () => {
    if (Array.isArray(wallet)) {
      return 'Slots'
    } else {
      return 'Main'
    }
  }

  const rootClasses = cn(s.root, { [s.main]: !Array.isArray(wallet), [s.slots]: Array.isArray(wallet) })

  return (
    <div className={rootClasses}>
      <p className={s.title}>{getTitleText()}</p>
      {getComponent()}
    </div>
  )
}

export default WalletGroup
