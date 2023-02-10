import customers from './customers.json';
import transactions from './transactions.json';

export async function getCustomers() {
  return new Promise(resolve => setTimeout(() => resolve({status: 200, data: customers}), 289))
}
export async function getTransactions() {
  return new Promise(resolve => setTimeout(() => resolve({status: 200, data: transactions}), 368))
}
export async function getTransactionByCustomer(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      const transaction = transactions.find(transaction => transaction.customerId === id);
      resolve({status: 200, data: transaction});
    }, 134);
  })
}
