import {useEffect, useState} from "react";
import TransactionController from "./api/TransactionController";
import CustomerController from "./api/CustomerController";


function App() {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    Promise
      .all([CustomerController.getAll(), TransactionController.getAll()])
      .then(resultList => {
        setCustomers(resultList[0]);
        setTransactions(resultList[1]);
      })
  }, []);
  return (
    <div>
      <h1>Reward App</h1>
      <h3>Customers</h3>
      <table>
        <thead>
        <tr>
          <th>Customer Name</th>
        </tr>
        </thead>
        <tbody>
        {
          customers.map(customer => (
            <tr key={Math.random()}>
              <td>{customer.name}</td>
            </tr>
          ))
        }
        </tbody>
      </table>

      <h3>Transactions</h3>
      <table>
        <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
        </tr>
        </thead>
        <tbody>
        {
          transactions.map(transaction => (
            <tr key={Math.random()}>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;
