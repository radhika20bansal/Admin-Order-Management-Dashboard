import React from "react";
import "./App.css";
import ProfileHeader from "./common-components/ProfileHeader";
import { Route, Routes } from "react-router-dom";
import LeftMenu from "./common-components/LeftMenu";
import OrdersComponent from "./components/OrdersComponent";

function App() {
  return (
    <div className="App">
      <div className="flex items-start">
        <LeftMenu />
        <Routes>
          <Route path='/' element={<OrdersComponent/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
