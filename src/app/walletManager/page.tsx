"use client"
import type { NextPage } from 'next'
import { ChangeEvent, useEffect, useState } from 'react'
import { TextareaAutosize } from '@mui/base'

import s from './SetWallets.module.sass'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import WalletManagerWrapper from '../walletManager/components/WalletManagerWrapper'
import { walletManagerActions } from '../_store/walletManager/walletManager.reducer'
import { IRawPrivateWallet } from '../walletManager/types/types'
import { selectRawPrivateWallets } from '../_store/walletManager/walletManager.selectors'

const { setRawPrivateWallets } = walletManagerActions

const Page: NextPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [walletsText, setWalletsText] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value
    setWalletsText(value)
  }

  const wallets = useSelector(selectRawPrivateWallets)

  console.log(wallets?.length)

  if (wallets?.length) {
    router.push('walletManager/dashboard')

    return null
  }

  const handleClick = () => {
    const stringWallets = walletsText.split('\n')
      
    const wallets: IRawPrivateWallet[] = stringWallets.map((value, index) => {
      const [name, privateKey] = value.split(':')

       return { privateKey, name, order: index }
    })

    dispatch(setRawPrivateWallets(wallets))

    router.push('walletManager/dashboard')
  }

  return (
    <WalletManagerWrapper className={s.content}>
      <p className={s.header}>Set Wallets</p>

      <div className={s.textareaContainer}>
        <div className={s.descriptionContainer}>
          {Array.from({ length: 5 }, (_, i) => i).map((numb) => {
            return <p key={numb} className={s.description}>{`${!numb ? 'main' : 'slot'} ----->`}</p>
          })}
        </div>

        <TextareaAutosize className={s.textarea} minRows={24} onChange={handleChange}/>
      </div>

      <button className={s.button} onClick={handleClick}>Add Wallets</button>
    </WalletManagerWrapper>
  )
}

export default Page
