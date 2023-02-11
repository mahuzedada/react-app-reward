import { fireEvent, render, screen } from '@testing-library/react';
import Customers from './Customers';
import CustomerController from '../../api/CustomerController';
import { BrowserRouter } from 'react-router-dom';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
  };
});
test('should render a list of customers', async () => {
  CustomerController.getAll = jest
    .fn()
    .mockResolvedValue([{ name: 'alibaba' }, { name: 'aladdin' }]);
  render(
    <BrowserRouter>
      <Customers />
    </BrowserRouter>
  );
  expect(await screen.findByText('alibaba')).toBeVisible();
  expect(await screen.findByText('aladdin')).toBeVisible();
  expect(CustomerController.getAll).toHaveBeenCalledTimes(1);
});
test('should navigate to customer transactions page', async () => {
  CustomerController.getAll = jest
    .fn()
    .mockResolvedValue([{ id: 'idx', name: 'alibaba' }, { name: 'aladdin' }]);
  render(
    <BrowserRouter>
      <Customers />
    </BrowserRouter>
  );
  fireEvent.click(await screen.findByText('alibaba'));
  expect(mockNavigate).toHaveBeenCalledTimes(1);
  expect(mockNavigate).toHaveBeenCalledWith('/customers/idx/transactions');
});
test('should navigate to all transactions page', async () => {
  CustomerController.getAll = jest
    .fn()
    .mockResolvedValue([]);
  render(
    <BrowserRouter>
      <Customers />
    </BrowserRouter>
  );
  fireEvent.click(await screen.findByText('View all transactions'));
  expect(mockNavigate).toHaveBeenCalledTimes(1);
  expect(mockNavigate).toHaveBeenCalledWith('/transactions');
});
