import { createBrowserRouter } from "react-router-dom";
import Root from '../Pages/Root/Root'
import Home from "../Pages/Home/Home";
import AddToy from "../Pages/AddToy/AddToy";
import Register from '../Pages/Register/Register'
import Private from "../component/Shared/Private/Private";
import Login from "../Pages/Login/Login";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import MyToys from "../Pages/MyToys/MyToys";
import Error from "../Pages/Error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement : <Error></Error>,
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
        path: "/shop/:type",
        element: <AllToys></AllToys>
      },
      {
        path: "/myToys",
        element: <Private><MyToys></MyToys></Private>
      },
      
      {
        path: "/toy/:ageType/:id",
        element: <ToyDetails></ToyDetails>
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