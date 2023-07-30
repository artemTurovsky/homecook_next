'use client'
import { useState } from "react"
import { useSelector } from "react-redux"

import s from './Signatures.module.sass'
import { selectSignatures } from "../../../../../../_store/walletManager/walletManager.selectors"

const Signatures = () => {
  const [isVisible, setIsVisible] = useState(false)
  const signatures = useSelector(selectSignatures)

  const handleClick = () => {
    setIsVisible(!isVisible)
  }

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <>
      {Boolean(signatures.length) && (
        <button onClick={handleClick} className={s.button}>
          Signatures
        </button>
      )}
      {isVisible && (
        <div className={s.signatures}>
          {signatures.map((sig) => <p className={s.sig} key={sig}>{sig}</p>)}
          <p onClick={handleClose} className={s.close}>X</p>
        </div>
      )}
    </>
  )
}

export default Signatures
