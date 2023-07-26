"use client"
import type { NextPage } from 'next'
import { ChangeEvent, useState } from 'react'
import { TextareaAutosize } from '@mui/base'
import { IRawPrivateWallet } from '../../types/types'

import s from './SetWallets.module.sass'
import WalletManagerWrapper from '../../components/WalletManagerWrapper'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { walletManagerActions } from '../../store/walletManager.reducer'

const { setRawPrivateWallets } = walletManagerActions

const SetWallets: NextPage = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [walletsText, setWalletsText] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value
    setWalletsText(value)
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

export default SetWallets
