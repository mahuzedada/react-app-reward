import MONTH_NAMES from './MONTH_NAMES';
import computeRewards from './computeRewards';

// This function only works when transactions are sorted by date
export default function computeRewardsPerMonth(transactions) {
  let currentMonth = null;
  let index = -1;
  const result = [];
  transactions.forEach((transaction) => {
    const transactionDate = new Date(transaction.date);
    const transactionMonth = transactionDate.getMonth();
    const transactionYear = transactionDate.getFullYear();
    if (transactionMonth !== currentMonth) {
      currentMonth = transactionMonth;
      index += 1;
      result.push({
        label: `${MONTH_NAMES[transactionMonth]} ${transactionYear}`,
        list: [],
      });
    }
    result[index].list.push(transaction);
  });
  result.forEach((item) => {
    item.reward = computeRewards(item.list);
  });
  return result;
}
