'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
import { WALLET_MANAGER_PATH } from "../../../walletManager/walletManager.paths"

interface ILink {
  name: string
  href: string
}

const LINKS: ILink[] = [
  {
    name: 'Wallet manager',
    href: WALLET_MANAGER_PATH
  }
]

const Links = () => {
  const pathname = usePathname()

  return (
    <div>
      {LINKS.map(({name, href}) => {
        const isActive = pathname?.startsWith(href)

        const className = isActive ? "text-emerald-600" : undefined

        return (
          <Link key={name} className={`${className} mr-2`} href={href}>
            {name}
          </Link>
        )
      })}
    </div>
  )
}

export { Links }
