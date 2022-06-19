
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
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
      <ShortPublicKey privateKey={privateKey}/>
      {/* <AmountSol amountSOL={amountLamports / LAMPORTS_PER_SOL}/> */}
      <div>{amountLamports / LAMPORTS_PER_SOL}</div>
    </div>
  )
}

export default Wallet
