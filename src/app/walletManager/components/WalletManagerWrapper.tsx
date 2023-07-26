import { ReactNode } from 'react'
import cn from 'classnames'

import s from './WalletManagerWrapper.module.sass'
import { NextPage } from 'next'

interface IProps {
  className?: string
  children: ReactNode
}

const WalletManagerWrapper: NextPage<IProps> = ({ className, children }) => {
  return (<div className={cn(s.root, className)}>{children}</div>)
}

export default WalletManagerWrapper
