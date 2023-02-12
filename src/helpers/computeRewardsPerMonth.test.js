import computeRewardsPerMonth from './computeRewardsPerMonth';

test('should split transactions per month', () => {
  const transactions = [
    { date: '02/19/2023', amount: 50 },
    { date: '02/12/2023', amount: 100 },
    { date: '01/10/2023', amount: 75 },
    { date: '12/20/2022', amount: 45 },
    { date: '12/15/2022', amount: 25 },
    { date: '11/11/2022', amount: 120 },
  ];
  const result = computeRewardsPerMonth(transactions);
  expect(result).toEqual([
    {
      label: 'February 2023',
      list: [
        { date: '02/19/2023', amount: 50 },
        { date: '02/12/2023', amount: 100 },
      ],
      reward: '50.00',
    },
    {
      label: 'January 2023',
      list: [{ date: '01/10/2023', amount: 75 }],
      reward: '25.00',
    },
    {
      label: 'December 2022',
      list: [
        { date: '12/20/2022', amount: 45 },
        { date: '12/15/2022', amount: 25 },
      ],
      reward: '0.00',
    },
    {
      label: 'November 2022',
      list: [{ date: '11/11/2022', amount: 120 }],
      reward: '90.00',
    },
  ]);
});
