import Customers from './Components/Customers/Customers';
import AllTransactions from './Components/Transactions/AllTransactions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerTransactions from './Components/Customers/CustomerTransactions';
import logo from './resource/rewardsLogo.png';

function App() {
  return (
    <div className="w-[940px] m-auto">
      <h1 className="mb-8 text-center font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-orange-400 to-emerald-600">
        Reward App
        <img alt="logo" src={logo} className="w-12 inline" />
      </h1>
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
