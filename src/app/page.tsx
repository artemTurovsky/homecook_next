import { Metadata } from 'next'
import Link from 'next/link'
import { WelcomeText } from './_components/welcomeText/WelcomeText'
import { WALLET_MANAGER_PATH } from './walletManager/walletManager.paths'
 
export const metadata: Metadata = {
  title: 'Home cook',
}

const Page = () => {
  return (
    <div className='h-full flex flex-col justify-center items-center mt-24'>
      <WelcomeText/>
      <Link href={WALLET_MANAGER_PATH}>
        <button className='px-2 py-4 bg-gray-400'>Set wallets</button>
      </Link>
    </div>
  )
}

export default Page
