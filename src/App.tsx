import _404 from "./components/Webinar/_404";
import "./index.css";
import Landing from "./Pages/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import RegSuccess from "./Pages/RegSuccess";
import Admin from "./Pages/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing, 
  },
  {
    path: "/register/success",
    Component: RegSuccess, 
  },
  {
    path: "/admin/main/bwtl",
    Component: Admin, 
  },
  {
    path: "*",
    Component: _404, 
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer/>
    </>
  );
}

export default App;
