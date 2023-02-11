import { useEffect, useState } from 'react';
import TransactionController from '../../api/TransactionController';
import TransactionsTable from './TransactionsTable';
import { useNavigate } from 'react-router-dom';

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
      <div
        onClick={goToCustomers}
        className="cursor-pointer text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4"
      >
        View customers
      </div>
      <div className="text-3xl font-bold mb-3">All transactions</div>
      <TransactionsTable transactions={transactions} />
    </>
  );
}
