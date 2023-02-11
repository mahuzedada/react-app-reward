import {fireEvent, render, screen} from '@testing-library/react';
import AllTransactions from './AllTransactions';
import TransactionController from '../../api/TransactionController';
import {BrowserRouter} from 'react-router-dom';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
  };
});
test('should render a list of transactions', async () => {
  TransactionController.getAll = jest.fn().mockResolvedValue([
    { date: 'date___1', amount: 'abc' },
    { date: 'date___2', amount: 'xyz' },
  ]);
  render(
    <BrowserRouter>
      <AllTransactions />
    </BrowserRouter>
  );
  expect(await screen.findByText('date___1')).toBeVisible();
  expect(await screen.findByText('date___2')).toBeVisible();
  expect(await screen.findByText('abc')).toBeVisible();
  expect(await screen.findByText('xyz')).toBeVisible();
  expect(TransactionController.getAll).toHaveBeenCalledTimes(1);
});
test('should navigate to customers page', async () => {
  TransactionController.getAll = jest.fn().mockResolvedValue([]);
  render(
    <BrowserRouter>
      <AllTransactions />
    </BrowserRouter>
  );
  fireEvent.click(await screen.findByText('View customers'));
  expect(mockNavigate).toHaveBeenCalledTimes(1);
  expect(mockNavigate).toHaveBeenCalledWith('/customers');
});
