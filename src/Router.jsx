import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import HeaderLayout from "./common/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
