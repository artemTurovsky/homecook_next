'use client'
import Link from "next/link"
import { useCurrentEndpointText } from "../../../../hooks/useCurrentEndpointText"

const Logo = () => {
  const endpointText = useCurrentEndpointText()

  return (
    <Link href="/">
      <span className="text-[3rem]/[4rem] font-blox">
        homeCook
      </span>
      <span className="text-sm pl-[6px]">{endpointText}</span>
    </Link>
  )
}

export { Logo }
