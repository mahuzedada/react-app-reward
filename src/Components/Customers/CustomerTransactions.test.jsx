import { fireEvent, render, screen } from '@testing-library/react';
import CustomerTransactions from './CustomerTransactions';
import CustomerController from '../../api/CustomerController';
import TransactionController from '../../api/TransactionController';
import { BrowserRouter } from 'react-router-dom';

const mockCustomerId = 1;
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
      customerId: mockCustomerId,
    }),
    useNavigate: () => mockNavigate,
  };
});
test('should render customer name, total rewards and the list of transactions', async () => {
  CustomerController.getById = jest.fn().mockResolvedValue({ name: 'alibaba' });
  TransactionController.getByCustomer = jest.fn().mockResolvedValue([
    { date: 'eiru93', amount: 110 },
    { date: 'nefv083', amount: 50 },
    { date: 'dfibno', amount: 51 },
  ]);

  render(
    <BrowserRouter>
      <CustomerTransactions />
    </BrowserRouter>
  );

  expect(await screen.findByText('Transactions for alibaba')).toBeVisible();
  expect(await screen.findByText('Total rewards:')).toBeVisible();
  expect(await screen.findByText('71')).toBeVisible();
  expect(await screen.findByText('eiru93')).toBeVisible();
  expect(await screen.findByText('50')).toBeVisible();
  expect(CustomerController.getById).toHaveBeenCalledTimes(1);
  expect(TransactionController.getByCustomer).toHaveBeenCalledTimes(1);
  expect(CustomerController.getById).toHaveBeenCalledWith(mockCustomerId);
  expect(TransactionController.getByCustomer).toHaveBeenCalledWith(
    mockCustomerId
  );
});
test('should navigate to customers page', async () => {
  CustomerController.getById = jest
    .fn()
    .mockResolvedValue({ name: 'anything' });
  TransactionController.getByCustomer = jest.fn().mockResolvedValue([]);
  render(
    <BrowserRouter>
      <CustomerTransactions />
    </BrowserRouter>
  );
  fireEvent.click(await screen.findByText('View all customers'));
  expect(mockNavigate).toHaveBeenCalledTimes(1);
  expect(mockNavigate).toHaveBeenCalledWith('/customers');
});
