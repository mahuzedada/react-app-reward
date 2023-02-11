import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomerController from '../../api/CustomerController';

export default function Customers() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    CustomerController.getAll().then(setCustomers);
  }, []);

  function goToCustomerTransactions(customerId) {
    navigate(`/customers/${customerId}/transactions`);
  }

  return (
    <>
      <h3>Customers</h3>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr
              key={Math.random()}
              onClick={() => goToCustomerTransactions(customer.id)}
            >
              <td>{customer.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
