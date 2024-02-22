import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Home from "./pages/home/Home";
import Users from "./pages/users/Users.js";
import Products from "./pages/products/Products.js";
import Login from "./pages/login/Login.js";
import "../src/styles/global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
