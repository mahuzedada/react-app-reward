import { useEffect, useState } from 'react';
import TransactionController from '../../api/TransactionController';
import TransactionsTable from './TransactionsTable';
import { useNavigate } from 'react-router-dom';
import Link from '../UiElements/Link';

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
      <Link onClick={goToCustomers}>View customers</Link>
      <div className="text-3xl font-bold mb-3">All transactions</div>
      <TransactionsTable transactions={transactions} />
    </>
  );
}
