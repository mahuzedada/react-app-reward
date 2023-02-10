import * as server from '../resource/server';
import TransactionController from "./TransactionController";

describe('getAll', () => {
  test('should handle success', async () => {
    server.getTransactions = jest.fn().mockResolvedValue({data: 123});
    const transactions = await TransactionController.getAll();
    expect(transactions).toEqual(123);
    expect(server.getTransactions).toHaveBeenCalledTimes(1);
  });
  test('should handle failure', async () => {
    server.getTransactions = jest.fn().mockRejectedValue('anything');
    const transactions = await TransactionController.getAll();
    expect(transactions).toBeNull();
    expect(server.getTransactions).toHaveBeenCalledTimes(1);
  });
});
describe('getByCustomer', () => {
  test('should handle success', async () => {
    server.getTransactionByCustomer = jest.fn().mockResolvedValue({data: 123});
    const transaction = await TransactionController.getByCustomer('id');
    expect(transaction).toEqual(123);
    expect(server.getTransactionByCustomer).toHaveBeenCalledTimes(1);
    expect(server.getTransactionByCustomer).toHaveBeenCalledWith('id');
  });
  test('should handle failure', async () => {
    server.getTransactionByCustomer = jest.fn().mockRejectedValue('anything');
    const transaction = await TransactionController.getByCustomer('id');
    expect(transaction).toBeNull();
    expect(server.getTransactionByCustomer).toHaveBeenCalledTimes(1);
    expect(server.getTransactionByCustomer).toHaveBeenCalledWith('id');
  });
});
