import { Checkbox } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/users/Home"));
const Menu = React.lazy(() => import("../pages/users/Menu"));
const Cart = React.lazy(() => import("../pages/users/Cart"));
const Checkout = React.lazy(() => import("../pages/users/Checkout"));
const QRListing = React.lazy(() => import("../pages/admin/QR"));
const OrdersListing = React.lazy(() => import("../pages/admin/Orders"));
const MenuListing = React.lazy(() => import("../pages/admin/MenuManagement"));

const Layout = () => {
  return (
    <Routes>
      {/* {admin} */}
      <>
        <Route path="/admin/qr" element={<QRListing />} />
        <Route path="/admin/orders" element={<OrdersListing />} />
        <Route path="/admin/menus" element={<MenuListing />} />
      </>

      {/* {users} */}
      <>
        <Route path="/" element={<Home />} />
        <Route path="/menus" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </>
    </Routes>
  );
};

export default Layout;
