import { useEffect, useState } from 'react';
import TransactionController from '../../api/TransactionController';
import TransactionsTable from './TransactionsTable';
import {useNavigate} from 'react-router-dom';

export default function AllTransactions() {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    TransactionController.getAll().then(setTransactions);
  }, []);

  function goToCustomers() {
    navigate('/customers');
  }

  return (
    <>
      <h3>Transactions</h3>
      <button onClick={goToCustomers}>View customers</button>
      <TransactionsTable transactions={transactions} />
    </>
  );
}
