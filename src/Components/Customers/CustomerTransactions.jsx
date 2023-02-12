import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TransactionController from '../../api/TransactionController';
import CustomerController from '../../api/CustomerController';
import TransactionsTable from '../Transactions/TransactionsTable';
import Link from '../UiElements/Link';
import TransactionsSummary from './TransactionsSummary';

export default function CustomerTransactions() {
  const navigate = useNavigate();
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const id = Number(customerId);
    if (id) {
      CustomerController.getById(id).then(setCustomer);
      TransactionController.getByCustomer(id).then(setTransactions);
    }
  }, [customerId]);

  function goToCustomers() {
    navigate('/customers');
  }

  function goToAllTransactions() {
    navigate('/transactions');
  }

  if (!customer) {
    return null;
  }

  return (
    <>
      <div className="flex justify-between w-96">
        <Link onClick={goToCustomers}>View all customers</Link>
        <Link onClick={goToAllTransactions}>View all transactions</Link>
      </div>
      <TransactionsSummary transactions={transactions} customer={customer} />
      <TransactionsTable transactions={transactions} />
    </>
  );
}
