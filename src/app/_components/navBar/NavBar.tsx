import React from 'react'

import ConnectWalletButton from '../connectWalletButton/ConnectWalletButton'
import { Logo } from './components/Logo'
import { Links } from './components/Links'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center p-[16px] border-b-[1px] border-b-solid border-b-gray-950 bg-slate-200'>
      <Logo/>

      <Links/>

      <ConnectWalletButton/>
    </div>
  )
}

export default NavBar
