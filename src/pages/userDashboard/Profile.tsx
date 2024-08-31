import { FiEdit } from "react-icons/fi";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useGetMeQuery } from "../../redux/features/user/userApi";
import { useAppSelector } from "../../redux/hooks";
import UpdateProfile from "../adminDashboard/UpdateProfile";
import { ImSpinner6 } from "react-icons/im";

const Profile = () => {
  const currentUser = useAppSelector(selectCurrentUser);
  const { data: userData } = useGetMeQuery(currentUser?.email);
  const user = userData?.data;

  return (
    <div className="flex flex-col md:flex-row text-white bg-[#001E2B] min-h-screen pt-16 xl:pt-0">
      {user ? (
        <>
          <div className=" md:w-1/4 flex justify-center py-4 my-0 px-4 bg-[#162C46]">
            <div>
              <div className="avatar flex justify-center items-center">
                <div className="w-24 rounded-full">
                  <img src={user?.image} />
                </div>
              </div>
              <div className="text-center mt-4">
                <h2 className="text-lg font-bold">{user?.name}</h2>
                <h2 className="mt-2">{user?.email}</h2>
              </div>
            </div>
          </div>

          <div className="w-full md:ml-4 bg-[#162C46] p-4 ">
            <div className="flex justify-between mb-6">
              <h3 className="text-center w-full">My Profile</h3>

              <div>
                {/* Modal Trigger Button */}
                <label
                  htmlFor="my_modal_8"
                  className="btn btn-sm bg-[#61adff] hover:bg-[#006ce1] text-white "
                >
                  <FiEdit size={20} />
                </label>
                <UpdateProfile my_modal_8="my_modal_8" />
              </div>
            </div>

            <div className="flex mb-12">
              <div className="flex justify-between w-1/2">
                <div className="">
                  <h3>Full name</h3>
                  <h3 className="font-semibold">{user?.name}</h3>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="">
                  <h3>Email</h3>
                  <h3 className="font-semibold">{user?.email}</h3>
                </div>
              </div>
            </div>

            <div className="flex ">
              <div className="flex justify-between w-1/2">
                <div className="">
                  <h3>Role </h3>
                  <h3 className="font-semibold">{user?.role}</h3>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="">
                  <h3>Mobile</h3>
                  <h3 className="font-semibold">{user?.phone}</h3>
                </div>
              </div>
            </div>

            <div className="flex ">
              <div className="flex justify-between w-1/2">
                <div className="mt-12">
                  <h3>Address </h3>
                  <h3 className="font-semibold">{user?.address}</h3>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center min-h-screen mx-auto">
          <ImSpinner6 size={50} className="animate-spin m-auto" />
        </div>
      )}
    </div>
  );
};

export default Profile;
