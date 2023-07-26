import React from 'react'

import s from './NavBar.module.sass'
import Link from 'next/link'
import ConnectWalletButton from '../connectWalletButton/ConnectWalletButton'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center p-[16px] border-b-[1px] border-b-solid border-b-gray-950 bg-slate-200'>
      <Link href="/">
        <div className={s.logo}>
          Home cook 0.1.0-alpha
        </div>
      </Link>

      <Link href="/dashboard">
        Dashboard
      </Link>

      <div>
        <Link href="/walletManager">
          WalletManager
        </Link>
      </div>

      <ConnectWalletButton/>
    </div>
  )
}

export default NavBar
