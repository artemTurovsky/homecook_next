import React, { FC } from 'react'
import cn from 'classnames'
import { getShortPubKey } from './utils/getShortPubKey'

import s from './ShortPublicKey.module.sass'
import { parsePrivateKey } from '../../utils/parseSecretKey'

interface IProps {
  privateKey: string
  className?: string
}

const ShortPublicKey= ({ privateKey, className }: IProps) => {
  const { publicKey } = parsePrivateKey(privateKey)

  const stringPublicKey = publicKey.toBase58()
  const shortPubKey = getShortPubKey(stringPublicKey)

  return (
    <div datatype={stringPublicKey} className={cn(s.root, className)}>
      <p>{shortPubKey}</p>
    </div>
  )
}

export default ShortPublicKey
