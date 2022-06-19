import { Keypair } from "@solana/web3.js"
import bs58 from 'bs58'

export const parsePrivateKey = (key: string) => {
  const targetSecretKey = bs58.decode(key)
  const keypair = Keypair.fromSecretKey(targetSecretKey)

  return keypair
}
