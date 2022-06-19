import React from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

import s from './NavBar.module.sass'
import Link from 'next/link'

const NavBar = () => {
  return (
    <div className={s.root}>
      <div className={s.logo}>
        Home cook 0.1.0-alpha
      </div>

      <div>
        <Link href="/walletManager">
          <a>WalletManager</a>
        </Link>
      </div>

      <WalletMultiButton/>
    </div>
  )
}

export default NavBar
