import { render, screen } from '@testing-library/react';
import TransactionsSummary from './TransactionsSummary';
import * as computeRewardsFile from '../../helpers/computeRewards';
import * as computeRewardsPerMonthFile from '../../helpers/computeRewardsPerMonth';

test('should display customer name and compute rewards', () => {
  const customer = { name: 'alibaba' };
  const transactions = 'anything';
  const mockComputeRewards = jest
    .spyOn(computeRewardsFile, 'default')
    .mockReturnValue('computeRewards result');
  const mockComputeRewardsPerMonthFile = jest
    .spyOn(computeRewardsPerMonthFile, 'default')
    .mockReturnValue([{ label: '_label', reward: '_reward' }]);

  render(
    <TransactionsSummary transactions={transactions} customer={customer} />
  );

  expect(screen.getByText(customer.name)).toBeVisible();
  expect(screen.getByText(customer.name)).toBeVisible();
  expect(mockComputeRewards).toHaveBeenCalledTimes(1);
  expect(mockComputeRewards).toHaveBeenCalledWith(transactions);
  expect(mockComputeRewardsPerMonthFile).toHaveBeenCalledTimes(1);
  expect(mockComputeRewardsPerMonthFile).toHaveBeenCalledWith(transactions);
  expect(screen.getByText('computeRewards result')).toBeVisible();
  expect(screen.getByText('_label')).toBeVisible();
  expect(screen.getByText('_reward')).toBeVisible();
});
