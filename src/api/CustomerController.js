import {getCustomers} from "../../resource/server";
export default class CustomerController {
  static async getAll() {
    try {
      const result = await getCustomers();
      return result.data;
    } catch (e) {
      return null;
    }
  }
}
