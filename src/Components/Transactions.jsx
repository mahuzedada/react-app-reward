import {useEffect, useState} from "react";
import TransactionController from "../api/TransactionController";

export default function  Transactions() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    TransactionController.getAll().then(setTransactions)
  }, []);
  return (
    <>
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
    </>
  );
}
