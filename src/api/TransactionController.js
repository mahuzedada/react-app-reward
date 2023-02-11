import { getTransactionsByCustomer, getTransactions } from '../resource/server';
export default class TransactionController {
  static async getAll() {
    try {
      const result = await getTransactions();
      return result.data;
    } catch (e) {
      return null;
    }
  }
  static async getByCustomer(id) {
    try {
      const result = await getTransactionsByCustomer(id);
      return result.data;
    } catch (e) {
      return null;
    }
  }
}
