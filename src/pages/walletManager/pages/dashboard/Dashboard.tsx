
import Shortcuts from "./components/shortcuts/Shortcuts"
import WalletList from "./components/walletList/WalletList"
import cn from 'classnames'

import s from './Dashboard.module.sass'
import WalletManagerWrapper from "../../components/WalletManagerWrapper"
import { NextPage } from "next"
import { useSelector } from "react-redux"
import { selectDashboardLoading, selectGroupedWallets } from "../../store/walletManager.selectors"
import { useRequestWalletsBalance } from "../../hooks/useRequestWalletsBalance"

const Dashboard: NextPage = () => {
  const groupedWallets = useSelector(selectGroupedWallets)
  const loading = useSelector(selectDashboardLoading)
  useRequestWalletsBalance()

  const getContent = () => {
    if (!groupedWallets) {
      return null
    }

    if (loading) {
      return <div>Loading...</div>
    }

    return (
      <>
        <WalletList groupedWallets={groupedWallets} />

        <Shortcuts />
      </>
    )
  }
  
  return (
    <WalletManagerWrapper>
      <div className={cn(s.root, { [s.loading]: loading })}>
        {getContent()}
      </div>
    </WalletManagerWrapper>
  )
}

export default Dashboard
