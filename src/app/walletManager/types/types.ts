import { PublicKey } from "@solana/web3.js"

export interface IRawPrivateWallet {
  privateKey: string
  name: string
  order: number
}

export interface IPrivateWallet extends IRawPrivateWallet {
  amountLamports: number
}

export interface IGroupedWallets {
  main: IPrivateWallet,
  slots: IPrivateWallet[]
}

export interface ITransactionConfig {
  sourcePrivateKey: string
  targetPublicKey: PublicKey
  amountLamports: number
}

