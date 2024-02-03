import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import FullImagePage from "./pages/FullImagePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Navigate to="photos" /> },
      { path: "photos", element: <HomePage /> },
      { path: "photos/:id", element: <FullImagePage /> },
    ],
  },
]);

export default router;
