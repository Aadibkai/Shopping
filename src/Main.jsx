import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import LoginSignup from "./Components/LoginSingup";
import YourOrders from "./Components/YourOrders";
import Cart from "./Components/Cart";
import App1 from "./Components/App1";
import App2 from "./Components/App2";
import App3 from "./Components/App3";
import App4 from "./Components/App4";
import App5 from "./Components/App5";
import App6 from "./Components/App6";
import App7 from "./Components/App7";

export const Main = () => {
  const location = useLocation();
  const [showOtherComponents, setShowOtherComponents] = useState(true);

  useEffect(() => {
    setShowOtherComponents(
      location.pathname !== "/LoginSignup" &&
      location.pathname !== "/YourOrders" &&
      location.pathname !== "/Cart"
    );
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/LoginSignup" element={<LoginSignup />} />
        <Route path="/YourOrders" element={<YourOrders />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      {showOtherComponents && (
        <>
          <App1 />
          <App2 />
          <App3 />
          <App4 />
          <App5 />
          <App6 />
          <App7 />
        </>
      )}
    </>
  );
};

export default Main;
