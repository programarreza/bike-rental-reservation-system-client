import { FaUsersCog } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";
import { PiUserSwitchBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const AdminSidebar = () => {
  return (
    <div>
      {/*  show to lg */}
      <div className="drawer drawer-start flex xl:hidden z-10 ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content pt-0 ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary absolute"
          >
            <LuMenuSquare />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu  w-72 min-h-full p-0">
            {/* Sidebar content here */}
            <div className="h-screen bg-[#081B29] text-white p-8 fixed ">
              <div className="flex justify-end">
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button btn btn-primary btn-sm"
                >
                  X
                </label>
              </div>
              <Link
                to={"/"}
                className="flex items-center gap-3 mb-12 shadow-xl"
              >
                <img className="w-16" src={logo} alt="" />
                <h2 className="text-2xl xl:text-3xl font-bold">Bike rental</h2>
              </Link>

              <div className="text-base mb-5 shadow-2xl border-b border-gray-800">
                <Link to={"/admin-dashboard/profile"}>
                  <h3 className="flex items-center gap-3 pb-4">
                    <PiUserSwitchBold size={20} /> <span>Profile</span>
                  </h3>
                </Link>
              </div>

              <div className="text-base mb-5 border-b border-gray-800">
                <Link to={"/admin-dashboard/bike-management"}>
                  <h3 className="flex items-center gap-3 pb-3">
                    <FaUsersCog size={20} /> <span> Bike Management</span>
                  </h3>
                </Link>
              </div>
              <div className="text-base mb-5 border-b border-gray-800">
                <Link to={"/admin-dashboard/user-management"}>
                  <h3 className="flex items-center gap-3 pb-3">
                    <FaUsersCog size={20} /> <span> User Management</span>
                  </h3>
                </Link>
              </div>
              <div className="text-base mb-5 border-b border-gray-800">
                <Link to={"/admin-dashboard/return-bike"}>
                  <h3 className="flex items-center gap-3 pb-3">
                    <FaUsersCog size={20} /> <span> Return Bike</span>
                  </h3>
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </div>

      {/* show to XL */}
      <div className="h-screen hidden xl:block bg-[#081B29] text-white p-6 fixed">
        <Link to={"/"} className="flex items-center gap-3 mb-12 shadow-xl">
          <img className="w-16" src={logo} alt="" />
          <h2 className="text-3xl font-bold">Bike rental</h2>
        </Link>

        <div className="text-base mb-5 shadow-2xl border-b border-gray-800">
          <Link to={"/admin-dashboard/profile"}>
            <h3 className="flex items-center gap-3 pb-4">
              <PiUserSwitchBold size={20} /> <span>Profile</span>
            </h3>
          </Link>
        </div>

        <div className="text-base mb-5 border-b border-gray-800">
          <Link to={"/admin-dashboard/bike-management"}>
            <h3 className="flex items-center gap-3 pb-3">
              <FaUsersCog size={20} /> <span> Bike Management</span>
            </h3>
          </Link>
        </div>

        <div className="text-base mb-5 border-b border-gray-800">
          <Link to={"/admin-dashboard/user-management"}>
            <h3 className="flex items-center gap-3 pb-3">
              <FaUsersCog size={20} /> <span> User Management</span>
            </h3>
          </Link>
        </div>

        <div className="text-base mb-5 border-b border-gray-800">
          <Link to={"/admin-dashboard/return-bike"}>
            <h3 className="flex items-center gap-3 pb-3">
              <FaUsersCog size={20} /> <span> Return Bike</span>
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
