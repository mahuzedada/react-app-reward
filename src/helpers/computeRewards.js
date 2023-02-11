function computeSingleReward(transaction) {
  if (transaction.amount >= 100) {
    return 50 + (transaction.amount - 100) * 2;
  }
  if (transaction.amount >= 50) {
    return transaction.amount - 50;
  }
  return 0;
}
export default function computeRewards(transactions) {
  return transactions.reduce((a, b) => a + computeSingleReward(b), 0);
}
