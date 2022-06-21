export const getShortAmountSol = (amountSOL: number) => {
  const [wholeNumber, decimal] = String(amountSOL).split('.')

  const getDecimalText = () => {
    if (decimal.length < 2) {
      return decimal
    }

    return decimal.slice(0, 2)
  }

  return decimal ? `${wholeNumber}.${getDecimalText()}...` : wholeNumber
}
