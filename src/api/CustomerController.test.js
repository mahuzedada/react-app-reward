import * as server from '../../resource/server';
import CustomerController from "./CustomerController";

test('should handle getAll success', async () => {
  server.getCustomers = jest.fn().mockResolvedValue({data: 123});
  const customers = await CustomerController.getAll();
  expect(customers).toEqual(123);
  expect(server.getCustomers).toHaveBeenCalledTimes(1);
})
test('should handle getAll failure', async () => {
  server.getCustomers = jest.fn().mockRejectedValue(123);
  const customers = await CustomerController.getAll();
  expect(customers).toBeNull();
  expect(server.getCustomers).toHaveBeenCalledTimes(1);
})
