import AmountSol from '../../../../../../../../components/amountSol/AmountSol'
import ShortPublicKey from '../../../../../../../../components/publicKey/ShortPublicKey'
import { IPrivateWallet } from '../../../../../../types/types'

import s from './Wallet.module.sass'

interface IProps {
  wallet: IPrivateWallet
}

const Wallet = ({ wallet }: IProps) => {
  const { amountLamports, privateKey, name } = wallet

  return (
    <div className={s.root}>
      <p>{name}</p>
      <ShortPublicKey className={s.pubKey} privateKey={privateKey}/>
      <AmountSol amountLamports={amountLamports}/>
    </div>
  )
}

export default Wallet
