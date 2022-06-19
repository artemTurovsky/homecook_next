import React, { FC } from 'react'

import { getShortPubKey } from './utils/getShortPubKey'

import s from './ShortPublicKey.module.sass'
import { parsePrivateKey } from '../../utils/parseSecretKey'

interface IProps {
  privateKey: string
}

const ShortPublicKey: FC<IProps> = ({ privateKey }) => {
  const { publicKey } = parsePrivateKey(privateKey)

  const stringPublicKey = publicKey.toBase58()
  const shortPubKey = getShortPubKey(stringPublicKey)

  return (
    <div datatype={stringPublicKey} className={s.root}>
      <p>{shortPubKey}</p>
    </div>
  )
}

export default ShortPublicKey
