export const getShortPubKey = (publicKey: string) => {
  const symbols = publicKey.length
  const firstPart = publicKey.slice(0, 3)
  const lastPart = publicKey.slice(symbols - 4, symbols)

  return `(${firstPart}...${lastPart})`
}
