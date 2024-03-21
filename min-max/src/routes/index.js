import LayoutDefault from "../layout/LayoutDefault";
import Sale from "../pages/Sale";
import Home from "../pages/Home";

import Contact from "../pages/Contact";
import LogIn from "../pages/LogIn";
import SignIn from "../pages/SignIn";
import PrivateRoutes from "../Components/PrivateRoutes";
import Cart from "../pages/Cart";
import InfoCustomer from "../pages/InfoCustomer";
import ProductPage from "../pages/ProductPage";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      ,
      {
        path: "login",
        element: <LogIn />,
      },

      {
        path: "signin",
        element: <SignIn />,
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "info-customer",
            element: <InfoCustomer />,
          },
        ],
      },
      {
        path: "product",
        element: <ProductPage />,
      },
      {
        path: "sale",
        element: <Sale />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
];
