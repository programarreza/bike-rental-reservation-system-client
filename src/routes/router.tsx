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
import BikeDetails from "../pages/BikeDetails/BikeDetails";
import AdminDashboard from "../components/layout/AdminDashboard";
import CreateBike from "../pages/adminDashboard/CreateBike";
import BikeManagement from "../pages/adminDashboard/BikeManagement";

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
      {
        path: "bike-details/:id",
        element: <BikeDetails />,
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

  {
    path: "/admin-dashboard",
    element: <AdminDashboard />,
    children: [
      {
        path: "/admin-dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/admin-dashboard/create-bike",
        element: <CreateBike />,
      },
      {
        path: "/admin-dashboard/bike-management",
        element: <BikeManagement />,
      },
    ],
  },
]);

export default router;
