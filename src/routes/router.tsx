import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../components/layout/AdminDashboard";
import MainLayout from "../components/layout/MainLayout";
import UserDashboard from "../components/layout/UserDashboard";
import ContactUs from "../components/ui/ContactUs/ContactUs";
import AboutUs from "../pages/AboutUs/AboutUs";
import BikeManagement from "../pages/adminDashboard/BikeManagement";
import UserManagement from "../pages/adminDashboard/UserManagement";
import BikeDetails from "../pages/BikeDetails/BikeDetails";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PaymentFailed from "../pages/PaymentFailed/PaymentFailed";
import PaymentSuccessful from "../pages/PaymentSuccessful/PaymentSuccessful";
import Register from "../pages/Register/Register";
import BikeListing from "../pages/userDashboard/BikeListing";
import MyRentals from "../pages/userDashboard/MyRentals";
import Profile from "../pages/userDashboard/Profile";
import ReturnBike from "../pages/adminDashboard/ReturnBike";
import PaymentCancel from "../pages/PaymentCancel/PaymentCancel";
import ProtectedRoute from "./ProtectedRoute";
import TermsOfService from "../pages/TermsOfService/TermsOfService";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";

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
        path: "terms-service",
        element: <TermsOfService />,
      },
      {
        path: "private-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "bike-details/:id",
        element: (
          <ProtectedRoute role="user">
            <BikeDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "payment/success/:tranId",
        element: (
          <ProtectedRoute role="user">
            <PaymentSuccessful />
          </ProtectedRoute>
        ),
      },
      {
        path: "payment/failed/:tranId",
        element: (
          <ProtectedRoute role="user">
            <PaymentFailed />
          </ProtectedRoute>
        ),
      },
      {
        path: "payment/cancel/:tranId",
        element: (
          <ProtectedRoute role="user">
            <PaymentCancel />
          </ProtectedRoute>
        ),
      },
    ],
  },

  {
    path: "/user-dashboard",
    element: (
      <ProtectedRoute role="user">
        <UserDashboard />
      </ProtectedRoute>
    ),
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
    element: (
      <ProtectedRoute role="admin">
        <AdminDashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/admin-dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/admin-dashboard/bike-management",
        element: <BikeManagement />,
      },
      {
        path: "/admin-dashboard/user-management",
        element: <UserManagement />,
      },
      {
        path: "/admin-dashboard/return-bike",
        element: <ReturnBike />,
      },
    ],
  },
]);

export default router;
