import { render, screen } from '@testing-library/react';
import TransactionsSummary from './TransactionsSummary';
import * as computeRewardsFile from '../../helpers/computeRewards';

test('should display customer name and compute rewards', () => {
  const customer = { name: 'alibaba' };
  const transactions = 'anything';
  const mockComputeRewards = jest
    .spyOn(computeRewardsFile, 'default')
    .mockReturnValue('computeRewards result');

  render(
    <TransactionsSummary transactions={transactions} customer={customer} />
  );

  expect(screen.getByText(customer.name)).toBeVisible();
  expect(screen.getByText(customer.name)).toBeVisible();
  expect(mockComputeRewards).toHaveBeenCalledTimes(1);
  expect(mockComputeRewards).toHaveBeenCalledWith(transactions);
  expect(screen.getByText('computeRewards result')).toBeVisible();
});
