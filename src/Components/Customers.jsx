import {useEffect, useState} from "react";
import CustomerController from "../api/CustomerController";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    CustomerController.getAll().then(setCustomers);
  }, []);
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
        {
          customers.map(customer => (
            <tr key={Math.random()}>
              <td>{customer.name}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </>
  );
}