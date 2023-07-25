import type { NextPage } from 'next'
import Link from 'next/link'

const HomePage: NextPage = () => {

  // hello new device

  return (
    <div>
      <ul>
      <li>
        <Link href="/walletManager">
          <a>WalletManager</a>
        </Link>
      </li>
      <li>
        <Link href="/walletManager/dashboard">
          <a>Dashboard</a>
        </Link>
      </li>
      <li>
        <Link href="walletManager/dashboard">
          <a>Set Wallets</a>
        </Link>
      </li>
      <li>
        <Link href="walletManager/dashboard">
          <a>SOL Form</a>
        </Link>
      </li>
    </ul>
    </div>
  )
}

export default HomePage
