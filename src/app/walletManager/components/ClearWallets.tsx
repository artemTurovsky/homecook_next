'use client'
import { useDispatch, useSelector } from "react-redux"
import { walletManagerActions } from "../../_store/walletManager/walletManager.reducer"
import { useRouter } from "next/navigation"
import { selectRawPrivateWallets } from "../../_store/walletManager/walletManager.selectors"

const ClearWallets = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const wallets = useSelector(selectRawPrivateWallets)

  if (!wallets?.length) {
    return null
  }

  const handleClick = () => {
    dispatch(walletManagerActions.clearWalletManagerSlice)
    router.push('/')
  }

  return (
    <button onClick={handleClick} className="my-2 mx-16 bg-stone-300 h-[24px]">Clear wallets</button>
  )
}

export { ClearWallets }
