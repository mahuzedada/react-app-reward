import Customers from './Components/Customers/Customers';
import AllTransactions from './Components/Transactions/AllTransactions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerTransactions from './Components/Customers/CustomerTransactions';

function App() {
  return (
    <div>
      <h1>Reward App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/transactions" element={<AllTransactions />} />
          <Route
            path="/customers/:customerId/transactions"
            element={<CustomerTransactions />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
