import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { Detail } from "../detail/Detail";

export const Router: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/gif/:gifId",
      element: <Detail />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};
