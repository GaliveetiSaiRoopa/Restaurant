import React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/users/Home"));
const Menu = React.lazy(() => import("../pages/users/Menu"));

const Layout = () => {
  return (
    <div>
      <Routes>
        {/* {admin} */}

        {/* {users} */}
        <>
          <Route path="/" element={<Home />} />
          <Route path="/menus" element={<Menu />} />
        </>
      </Routes>
    </div>
  );
};

export default Layout;
