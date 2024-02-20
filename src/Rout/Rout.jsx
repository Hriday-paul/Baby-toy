import { createBrowserRouter } from "react-router-dom";
import Root from '../Pages/Root/Root'
import Home from "../Pages/Home/Home";
import AddToy from "../Pages/AddToy/AddToy";

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
          element: <AddToy></AddToy>
      },
    ]
    },
  ]);

  export default router