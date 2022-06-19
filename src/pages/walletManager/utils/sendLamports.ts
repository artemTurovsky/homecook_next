import { Connection, SystemProgram, Transaction } from "@solana/web3.js"
import { parsePrivateKey } from "../../../utils/parseSecretKey"
import { sleep } from "../../../utils/sleep"
import { ITransactionConfig } from "../types/types"

interface IParams {
  connection: Connection
  transactionConfig: ITransactionConfig
  sleepMS?: number
}

export const sendLamports = async (params: IParams): Promise<string>=> {
  const { connection, transactionConfig, sleepMS } = params
  const { sourcePrivateKey, targetPublicKey, amountLamports } = transactionConfig
  const sourceKeypair = parsePrivateKey(sourcePrivateKey)

  try {
    if (sleepMS) {
      await sleep(sleepMS)
    }
    
    const transaction = new Transaction()

    transaction.add(SystemProgram.transfer({
      fromPubkey: sourceKeypair.publicKey,
      toPubkey: targetPublicKey,
      lamports: amountLamports
    }))

    const transactionSignature = await connection.sendTransaction(transaction, [sourceKeypair])

    return transactionSignature
  } catch (error) {
    return `Error sending SOL from ${sourceKeypair.publicKey}, to ${targetPublicKey}`
  }
}
