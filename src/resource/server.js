import customers from './customers.json';
import transactions from './transactions.json';

export async function getCustomers() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ status: 200, data: customers }), 289)
  );
}
export async function getCustomerById(id) {
  return new Promise((resolve) =>
    setTimeout(() => {
      const customer = customers.find((customer) => customer.id === id);
      resolve({ status: 200, data: customer });
    }, 123)
  );
}
export async function getTransactions() {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ status: 200, data: transactions }), 368)
  );
}
export async function getTransactionsByCustomer(id) {
  return new Promise((resolve) =>
    setTimeout(() => {
      const transaction = transactions.filter(
        (transaction) => transaction.customerId === id
      );
      resolve({ status: 200, data: transaction });
    }, 134)
  );
}
