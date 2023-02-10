import Customers from "./Components/Customers";
import Transactions from "./Components/Transactions";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Reward App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transactions/:id" element={<Transactions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
