import { render, screen } from '@testing-library/react';
import TransactionsTableFooter from './TransactionsTableFooter';

test('should display total transaction count and total transaction amount', () => {
  const transactions = [{ amount: 1 }, { amount: 2 }];

  render(<TransactionsTableFooter transactions={transactions} />);

  expect(screen.getByText('2 transactions')).toBeVisible();
  expect(screen.getByText('Total transaction amount:')).toBeVisible();
  expect(screen.getByText('3.00')).toBeVisible();
});
