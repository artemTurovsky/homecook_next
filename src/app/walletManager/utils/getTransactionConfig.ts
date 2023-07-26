import { SOLANA_LAMPORTS_FEE } from "../../../constants/solanaLamportsFee";
import { parsePrivateKey } from "../../../utils/parseSecretKey";
import { IPrivateWallet, ITransactionConfig } from "../types/types";

interface IParams {
  source: IPrivateWallet
  target: IPrivateWallet
  amount?: number
}

export const getTransactionConfig = (params: IParams): ITransactionConfig => {
  const { source, target, amount } = params

  const { publicKey: targetPublicKey } = parsePrivateKey(target.privateKey)

  const amountLamports = amount ? amount : source.amountLamports - SOLANA_LAMPORTS_FEE

  return {
    sourcePrivateKey: source.privateKey,
    targetPublicKey,
    amountLamports
  }
}
