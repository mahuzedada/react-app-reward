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
function processTransactions(list) {
  return list
    .sort((a, b) => {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      if (aDate < bDate) {
        return 1;
      }
      if (aDate > bDate) {
        return -1;
      }
      return 0;
    });
}
export async function getTransactions() {
  return new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          status: 200,
          data: processTransactions(transactions),
        }),
      368
    )
  );
}
export async function getTransactionsByCustomer(id) {
  return new Promise((resolve) =>
    setTimeout(() => {
      const transaction = processTransactions(
        transactions.filter((transaction) => transaction.customerId === id)
      );
      resolve({ status: 200, data: transaction });
    }, 134)
  );
}
