'use client'
import { useConnection } from "@solana/wallet-adapter-react"

type TEndpointText = 'devnet' | 'testnet' | 'mainnet'

const ENDPOINT_TEXT: Record<string, TEndpointText> = {
  'https://api.devnet.solana.com': 'devnet',
  'https://api.testnet.solana.com': 'testnet',
  'https://api.mainnet-beta.solana.com/': 'mainnet',
}

const useCurrentEndpointText = () => {
  const { connection: { rpcEndpoint } } = useConnection()

  return ENDPOINT_TEXT[rpcEndpoint]
}

export { useCurrentEndpointText }
