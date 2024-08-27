import { Outlet } from "react-router-dom";
import UserSidebar from "../ui/userManagement/UserSidebar";

const UserDashboard = () => {
  return (
    <div className="flex">
      <div className="xl:w-1/5 bg-[#001E2B]">
        <UserSidebar />
      </div>

      <div className="w-full xl:w-4/5">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
