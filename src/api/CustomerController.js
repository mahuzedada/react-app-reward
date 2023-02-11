import { getCustomerById, getCustomers } from '../resource/server';
export default class CustomerController {
  static async getAll() {
    try {
      const result = await getCustomers();
      return result.data;
    } catch (e) {
      return null;
    }
  }
  static async getById(id) {
    try {
      const result = await getCustomerById(id);
      return result.data;
    } catch (e) {
      return null;
    }
  }
}
