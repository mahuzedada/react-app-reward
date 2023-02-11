import {render, screen} from "@testing-library/react";
import CustomerTransactions from "./CustomerTransactions";
import CustomerController from "../../api/CustomerController";
import TransactionController from "../../api/TransactionController";

const mockCustomerId = 1;
jest.mock('react-router-dom', () => {
  return {
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
      customerId: mockCustomerId,
    })
  }
})
test('should render customer name, total rewards and the list of transactions', async () => {
  CustomerController.getById = jest.fn().mockResolvedValue({name: 'alibaba'});
  TransactionController.getByCustomer = jest.fn().mockResolvedValue([{date: 'eiru93', amount: 110}, {date: 'nefv083', amount: 50}]);

  render(<CustomerTransactions />);

  expect(await screen.findByText('Transactions for alibaba')).toBeVisible();
  expect(await screen.findByText('Total rewards 70 points')).toBeVisible();
  expect(await screen.findByText('eiru93')).toBeVisible();
  expect(await screen.findByText('50')).toBeVisible();
  expect(CustomerController.getById).toHaveBeenCalledTimes(1);
  expect(TransactionController.getByCustomer).toHaveBeenCalledTimes(1);
  expect(CustomerController.getById).toHaveBeenCalledWith(mockCustomerId);
  expect(TransactionController.getByCustomer).toHaveBeenCalledWith(mockCustomerId);
});
