import * as server from '../resource/server';
import CustomerController from './CustomerController';

describe('getAll', () => {
  test('should handle success', async () => {
    server.getCustomers = jest.fn().mockResolvedValue({ data: 123 });
    const customers = await CustomerController.getAll();
    expect(customers).toEqual(123);
    expect(server.getCustomers).toHaveBeenCalledTimes(1);
  });
  test('should handle failure', async () => {
    server.getCustomers = jest.fn().mockRejectedValue(123);
    const customers = await CustomerController.getAll();
    expect(customers).toBeNull();
    expect(server.getCustomers).toHaveBeenCalledTimes(1);
  });
});
describe('getById', () => {
  test('should handle success', async () => {
    server.getCustomerById = jest.fn().mockResolvedValue({ data: 123 });
    const customer = await CustomerController.getById(90);
    expect(customer).toEqual(123);
    expect(server.getCustomerById).toHaveBeenCalledTimes(1);
    expect(server.getCustomerById).toHaveBeenCalledWith(90);
  });
  test('should handle failure', async () => {
    server.getCustomerById = jest.fn().mockRejectedValue(123);
    const customer = await CustomerController.getById(90);
    expect(customer).toBeNull();
    expect(server.getCustomerById).toHaveBeenCalledTimes(1);
    expect(server.getCustomerById).toHaveBeenCalledWith(90);
  });
});
