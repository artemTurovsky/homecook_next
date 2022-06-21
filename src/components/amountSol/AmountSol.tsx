import { useEffect, useRef, useState } from 'react'


import s from './AmountSol.module.sass'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'
import { getShortAmountSol } from './utils/getShortAmountSOL'

interface IProps {
  amountLamports: number
  solAfter?: boolean
}

const AmountSol = (props: IProps) => {
  const { amountLamports, solAfter = false } = props
  const [isHovered, setIsHovered] = useState(false)

  const amountSol = amountLamports / LAMPORTS_PER_SOL

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={s.root}>
      {!solAfter && <div className={s.sol}>SOL:</div>}
      <div className={s.amountContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={s.amount}>
          {getShortAmountSol(amountSol)}
        </div>
        {isHovered && <div onMouseEnter={e => e.stopPropagation()} className={s.fullAmount}>{amountSol}</div>}
      </div>
      {solAfter && <div className={s.solAfter}>SOL</div>}
    </div>
  )
}

export default AmountSol
