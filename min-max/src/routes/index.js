import LayoutDefault from "../layout/LayoutDefault";
import Sale from "../pages/Clients/Sale";
import Home from "../pages/Home";

import Contact from "../pages/Clients/Contact";
import LogIn from "../pages/LogIn";
import SignIn from "../pages/SignIn";
import PrivateRoutes from "../Components/Clients/PrivateRoutes";
import Cart from "../pages/Clients/Cart";
import InfoCustomer from "../pages/Clients/InfoCustomer";
import ProductPage from "../pages/Clients/ProductPage";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault/>,
    // eslint-disable-next-line
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
          }
        ]
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
      }
    ]
  }
];
