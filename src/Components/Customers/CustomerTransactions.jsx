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
      <div onClick={goToCustomers} className="cursor-pointer text-blue-600 hover:text-blue-700 transition duration-300 ease-in-out mb-4">View all customers</div>
      <div className="flex items-center justify-between m-b-4">
        <div className="text-3xl font-bold mb-3">Transactions for {customer.name}</div>
        <div className="">Total rewards: <span className="text-4xl">{computeRewards(transactions)}</span></div>
      </div>
      <TransactionsTable transactions={transactions} />
    </>
  );
}
