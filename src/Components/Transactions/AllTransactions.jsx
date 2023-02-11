import { useEffect, useState } from 'react';
import TransactionController from '../../api/TransactionController';
import TransactionsTable from './TransactionsTable';

export default function AllTransactions() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    TransactionController.getAll().then(setTransactions);
  }, []);
  return (
    <>
      <h3>Transactions</h3>
      <TransactionsTable transactions={transactions} />
    </>
  );
}
