import { Checkbox } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/users/Home"));
const Menu = React.lazy(() => import("../pages/users/Menu"));
const Checkout = React.lazy(() => import("../pages/users/Checkout"));

const Layout = () => {
  return (
    <Routes>
      {/* {admin} */}

      {/* {users} */}
      <>
        <Route path="/" element={<Home />} />
        <Route path="/menus" element={<Menu />} />
        <Route path="/checkout" element={<Checkout />} />
      </>
    </Routes>
  );
};

export default Layout;
