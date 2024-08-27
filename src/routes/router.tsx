import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ContactUs from "../components/ui/ContactUs/ContactUs";
import UserDashboard from "../components/layout/UserDashboard";
import Profile from "../pages/userDashboard/Profile";
import BikeListing from "../pages/userDashboard/BikeListing";
import MyRentals from "../pages/userDashboard/MyRentals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
    ],
  },

  {
    path: "/user-dashboard",
    element: <UserDashboard />,
    children: [
      {
        path: "/user-dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/user-dashboard/bike-listing",
        element: <BikeListing />,
      },
      {
        path: "/user-dashboard/my-rentals",
        element: <MyRentals />,
      },
    ],
  },
]);

export default router;
