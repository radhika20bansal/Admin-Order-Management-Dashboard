import "./App.css";
import { Route, Routes } from "react-router-dom";
import LeftMenu from "./common-components/LeftMenu";
import OrdersComponent from "./components/OrdersComponent";
import OrderDetails from "./components/OrderDetails";

function App() {
  return (
    <div className="App">
      <div className="flex items-start">
        <LeftMenu />
        <Routes>
          <Route path='/' element={<OrdersComponent/>} />
          <Route path='/orders/:orderId' element={<OrderDetails/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
