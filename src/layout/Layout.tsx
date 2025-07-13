import { Checkbox } from "@mui/material";
import React, { useRef, useState } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

const Home = React.lazy(() => import("../pages/users/Home"));
const Menu = React.lazy(() => import("../pages/users/Menu"));
const Cart = React.lazy(() => import("../pages/users/Cart"));
const Checkout = React.lazy(() => import("../pages/users/Checkout"));
const QRListing = React.lazy(() => import("../pages/admin/QR"));
const OrdersListing = React.lazy(() => import("../pages/admin/Orders"));
const MenuListing = React.lazy(() => import("../pages/admin/MenuManagement"));
const Reports = React.lazy(() => import("../pages/admin/Reports"));

const SideBarLayout = ({ children }: any) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [menuIndex, setOpenMenuIndex] = useState(1);
  const [showUserInfo, setShowUserInfo] = useState(false);
  const wrapperInfoRef = useRef(null);
  const navigate = useNavigate();
  const logout = () => {};
  const toogleUserInfo = () => {};
  let user: any = {
    name: "SaiRoopa",
    email: "sairoopa@scube.me",
  };
  const admin_routes = [
    {
      name: "QR List",
      icon: "",
      index: 1,
      url: "admin/qr",
      module: "qr",
      sub_menus: [],
    },
    {
      name: "Menu Management",
      icon: "",
      index: 2,
      url: "admin/menus",
      module: "menus",
      sub_menus: [],
    },
    {
      name: "Orders",
      icon: "",
      index: 3,
      url: "admin/orders",
      module: "orders",
      sub_menus: [],
    },
    {
      name: "Financial Reports",
      icon: "",
      index: 4,
      url: "admin/reports",
      module: "reports",
      sub_menus: [],
    },
  ];
  return (
    <div className="flex h-screen overflow-y-hidden bg-white text-white">
      <div
        className={`fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-56  
       max-h-screen overflow-hidden transition-all transform bg-[#765996] 
       shadow-lg lg:z-auto lg:static lg:shadow-none text-navGrey ${
         !isSidebarOpen ? "-translate-x-full lg:translate-x-0 lg:w-20" : ""
       }`}
      >
        <div
          className={`flex relative items-center justify-center flex-shrink-0 p-2 ${
            !isSidebarOpen ? "lg:justify-center" : ""
          }`}
        >
          <span className="flex gap-6   p-2 text-xl font-semibold leading-8 tracking-wider uppercase whitespace-nowrap">
            S
          </span>
          <button
            type="button"
            className=" p-2 rounded-md lg:hidden absolute right-[10px] top-[10px] "
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex-1 pt-4 overflow-auto">
          <ul>
            {React.Children.toArray(
              admin_routes.map((x: any) => (
                <li
                  className={`pb-2  ${
                    menuIndex === x.index
                      ? "bg-gray-100 text-black border border-[#765996]"
                      : ""
                  }`}
                  onClick={() => setOpenMenuIndex(x.index)}
                >
                  <Link
                    to={`/${x.url}`}
                    className={`flex items-center py-2 px-4  space-x-4 relative   ${
                      !isSidebarOpen ? "justify-center rounded-md" : ""
                    }`}
                  >
                    {x.name}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </nav>
      </div>

      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <header className="flex-shrink-0 border-b border-[#765996]">
          <div className="flex items-center justify-between p-4">
            <div>
              {" "}
              <div className="cursor-pointer">
                <svg
                  className={` ${
                    isSidebarOpen
                      ? "rotate-0 ease-in-out  duration-300			"
                      : "rotate-180	 ease-in-out  duration-300"
                  }`}
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  width="29"
                  height="16"
                  viewBox="0 0 29 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.2 1.6C11.2 0.716344 11.9163 0 12.8 0H27.2C28.0837 0 28.8 0.716344 28.8 1.6C28.8 2.48366 28.0837 3.2 27.2 3.2H12.8C11.9163 3.2 11.2 2.48366 11.2 1.6ZM7.53137 2.06863C8.15621 2.69347 8.15621 3.70653 7.53137 4.33137L5.46274 6.4H27.2C28.0837 6.4 28.8 7.11634 28.8 8C28.8 8.88366 28.0837 9.6 27.2 9.6H5.46274L7.53137 11.6686C8.15621 12.2935 8.15621 13.3065 7.53137 13.9314C6.90653 14.5562 5.89347 14.5562 5.26863 13.9314L0.469266 9.13201C0.469053 9.13179 0.468841 9.13158 0.468629 9.13137C0.467498 9.13024 0.466369 9.12911 0.465241 9.12797C0.313521 8.97536 0.19891 8.79977 0.121406 8.61245C0.0431767 8.4238 0 8.21694 0 8C0 7.78306 0.0431767 7.5762 0.121406 7.38755C0.199486 7.19883 0.315227 7.02203 0.468629 6.86863C0.468647 6.86861 0.468664 6.86859 0.468682 6.86858L5.26863 2.06863C5.89347 1.44379 6.90653 1.44379 7.53137 2.06863ZM11.2 14.4C11.2 13.5163 11.9163 12.8 12.8 12.8H27.2C28.0837 12.8 28.8 13.5163 28.8 14.4C28.8 15.2837 28.0837 16 27.2 16H12.8C11.9163 16 11.2 15.2837 11.2 14.4Z"
                    fill="#141C4C"
                  />
                </svg>
              </div>
            </div>

            <div className=" relative flex items-center space-x-3 sm:pr-3 sm:mr-4">
              {/* <div
                className="items-center  space-x-3 md:flex"
                ref={wrapperNotificationRef}
              >
                <div className="relative">
                  <img
                    className="cursor-pointer"
                    src={Notification}
                    alt="Notification"
                    onClick={() => toogleNotification()}
                  />

                  <div
                    className={` text-SpaceCadet absolute block w-48 z-99 max-w-md layout-menu transform layout-menu rounded-md 
                  shadow-lg -translate-x-3/4 min-w-max ${
                    showNotification ? "block" : "hidden"
                  }`}
                  >
                    <div className="p-4 font-medium border-b border-b-line">
                      <span className="text-SpaceCadet">Notification</span>
                    </div>
                    <ul className="flex flex-col p-2 my-2 space-y-1">
                      <li>
                        <a className="block px-2 py-1 transition rounded-md ">
                          Message 1
                        </a>
                      </li>
                      <li>
                        <a className="block px-2 py-1 transition rounded-md ">
                          Message 2
                        </a>
                      </li>
                    </ul>
                    <div className="flex items-center justify-center p-4  underline border-t border-t-Comet">
                      <a href="#">See All</a>
                    </div>
                  </div>
                </div>
              </div> */}

              <div
                className=" gap-4 flex items-center justify-between relative"
                ref={wrapperInfoRef}
              >
                <p className="font-bold text-SpaceCadet">
                  Hi {""}
                  {user?.name}
                </p>

                <div className="relative ">
                  <svg
                    className="cursor-pointer"
                    onClick={() => toogleUserInfo()}
                    width="16"
                    height="18"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 0.881894L5 5.11719L9 0.881894"
                      stroke="#141C4C"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div
                    className={`absolute w-44  top-3 left-8  user-login-info  mt-3 transform -translate-x-full layout-menu rounded-md shadow-lg ${
                      showUserInfo ? "block" : "hidden"
                    } `}
                  >
                    <ul className=" text-SpaceCadet flex flex-col p-2 my-2 space-y-1">
                      <li>{user.email}</li>
                    </ul>
                    <div
                      onClick={() => logout()}
                      className="cursor-pointer font-bold text-SpaceCadet flex justify-between items-center p-4   border-t border-t-line"
                    >
                      <p>Logout</p>
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2611 4.54162V3.84187C10.2611 2.31562 9.02363 1.07812 7.49738 1.07812H3.84113C2.31563 1.07812 1.07812 2.31562 1.07812 3.84187V12.1894C1.07812 13.7156 2.31563 14.9531 3.84113 14.9531H7.50488C9.02663 14.9531 10.2611 13.7194 10.2611 12.1976V11.4904"
                          stroke="#151929"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.5307 8.375H6.5"
                          stroke="#151929"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.1602 5.82812L15.3562 8.01437L13.1602 10.2014"
                          stroke="#151929"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 max-h-full p-2 lg:p-3 overflow-hidden overflow-y-scroll text-SpaceCadet">
          {children}
        </main>
      </div>
    </div>
  );
};

export const Layout = () => {
  return (
    <Routes>
      {/* {admin} */}
      <>
        <Route
          path="/admin/qr"
          element={
            <SideBarLayout>
              <QRListing />
            </SideBarLayout>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <SideBarLayout>
              <OrdersListing />
            </SideBarLayout>
          }
        />
        <Route
          path="/admin/menus"
          element={
            <SideBarLayout>
              <MenuListing />
            </SideBarLayout>
          }
        />

        <Route
          path="admin/reports"
          element={
            <SideBarLayout>
              <Reports />
            </SideBarLayout>
          }
        />
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
