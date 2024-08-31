import { Outlet, useLocation } from "react-router-dom";
import UserSidebar from "../ui/userManagement/UserSidebar";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useGetMeQuery } from "../../redux/features/user/userApi";

const UserDashboard = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const { data: userData } = useGetMeQuery(currentUser?.email);
  const user = userData?.data;

  // Get the current route
  const location = useLocation();
  const isHomePage = location.pathname === "/user-dashboard";

  return (
    <div className="flex">
      <div className="xl:w-1/5 bg-[#001E2B]">
        <UserSidebar />
      </div>

      <div className="w-full xl:w-4/5  bg-[#162C46] min-h-screen">
        {isHomePage && (
          <div className="bg-[#001E2B] m-4 text-white p-6 rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-bold">Welcome back, {user?.name}!</h2>
            <p className="mt-2 text-lg">
              We're glad to have you back. Explore your dashboard to manage your
              account and rentals.
            </p>
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
