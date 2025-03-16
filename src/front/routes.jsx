// Import necessary components and functions from react-router-dom.


import { createBrowserRouter } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import { Layout } from "./pages/Layout";


export const router = createBrowserRouter([
  {
      path: "/",
      element: <Layout />,
      children: [
          { path: "signup", element: <Signup /> },
          { path: "login", element: <Login /> },
          { path: "private", element: <Private /> },
      ]
  }
]);