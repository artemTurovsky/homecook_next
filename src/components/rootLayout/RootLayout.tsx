import React, { FC, ReactNode } from 'react'

import s from './RootLayout.module.sass'

interface IProps {
  children: ReactNode
}

const RootLayout: FC<IProps> = ({ children }) => {
  return (
    <div className={s.root}>
      { children }
    </div>
  )
}

export default RootLayout
