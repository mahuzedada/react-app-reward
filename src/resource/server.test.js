import {getCustomerById, getCustomers, getTransactions, getTransactionsByCustomer} from './server';

test('should getCustomers', async () => {
  const result = await getCustomers();
  expect(result.data.length).toBeGreaterThan(0);
});
test('should getCustomer by id', async () => {
  const customers = (await getCustomers()).data;
  const result = await getCustomerById(customers[0].id);
  expect(result.data).toEqual(customers[0]);
});
test('should getTransactions', async () => {
  const result = await getTransactions();
  expect(result.data.length).toBeGreaterThan(0);
});
test('should getTransactions by customer', async () => {
  const customers = (await getCustomers()).data;
  const result = await getTransactionsByCustomer(customers[0].id);
  expect(result.data.length).toBeGreaterThan(0);
});
