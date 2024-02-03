import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import FullImagePage from "./pages/FullImagePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ":id", element: <FullImagePage /> },
    ],
  },
]);

export default router;
