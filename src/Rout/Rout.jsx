import { createBrowserRouter } from "react-router-dom";
import Root from '../Pages/Root/Root'
import Home from "../Pages/Home/Home";
import AddToy from "../Pages/AddToy/AddToy";
import Register from '../Pages/Register/Register'
import Private from "../component/Shared/Private/Private";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addToy",
        element: <Private><AddToy></AddToy></Private>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ]
  },
]);

export default router