import MONTH_NAMES from './MONTH_NAMES';
import computeRewards from './computeRewards';

/*
 This function only works when transactions are sorted by date
 */
export default function computeRewardsPerMonth(transactions) {
  let currentMonth = null;

  return transactions.reduce((currentResult, currentTerm) => {
    const transactionDate = new Date(currentTerm.date);
    const transactionMonth = transactionDate.getMonth();
    const transactionYear = transactionDate.getFullYear();

    if (transactionMonth !== currentMonth) {
      currentMonth = transactionMonth;
      currentResult.push({
        label: `${MONTH_NAMES[transactionMonth]} ${transactionYear}`,
        list: [],
        reward: '0.00',
      });
    }

    const currentIndex = currentResult.length - 1;
    currentResult[currentIndex].list.push(currentTerm);
    currentResult[currentIndex].reward = (
      Number(currentResult[currentIndex].reward) +
      Number(computeRewards([currentTerm]))
    ).toFixed(2);
    return currentResult;
  }, []);
}
