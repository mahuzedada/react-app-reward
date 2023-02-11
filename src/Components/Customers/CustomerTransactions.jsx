import {useNavigate, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import TransactionController from '../../api/TransactionController';
import CustomerController from '../../api/CustomerController';
import TransactionsTable from '../Transactions/TransactionsTable';
import computeRewards from '../../helpers/computeRewards';

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

  if (!customer) {
    return null;
  }

  return (
    <>
      <button onClick={goToCustomers}>Back to all customers</button>
      <h2>Transactions for {customer.name}</h2>
      <h3>Total rewards {computeRewards(transactions)} points</h3>
      <TransactionsTable transactions={transactions} />
    </>
  );
}
