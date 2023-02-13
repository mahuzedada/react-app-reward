function computeSingleReward(transaction) {
  const { amount } = transaction;
  if (amount >= 100) {
    return 50 + (amount - 100) * 2;
  }
  if (amount >= 50) {
    return amount - 50;
  }
  return 0;
}
export default function computeRewards(transactions) {
  return transactions
    .reduce(
      (currentResult, currentTerm) =>
        currentResult + computeSingleReward(currentTerm),
      0
    )
    .toFixed(2);
}
