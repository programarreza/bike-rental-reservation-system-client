import Swal from "sweetalert2";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useUpdateUserMutation,
} from "../../redux/features/user/userApi";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const UserManagement = () => {
  const { data } = useGetAllUsersQuery(undefined);
  const currentUser = useAppSelector(selectCurrentUser);
  const userData = data?.data;
  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();

  const makeAdmin = (id: string) => {
    console.log(id);
    const data = { role: "admin" };
    const args = { id, data };
    updateUser(args);
  };

  const handleDeleteUser = (id: string) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      {!userData || userData?.length === 0 ? (
        <h2 className="flex justify-center items-center h-screen text-2xl">
          Not Available userData{" "}
        </h2>
      ) : (
        <div className="mx-4 mt-8">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-[#FAFAFA]">
                <tr className="uppercase font-bold">
                  <th>Image</th>
                  <th>name</th>
                  <th>email</th>
                  <th>phone</th>
                  <th>role</th>
                  <th>action</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {userData?.map((user) => {
                  return (
                    <tr key={user._id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={user?.image} alt={user?.name} />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="font-bold">{user?.name}</td>
                      <td>{user?.email}</td>
                      <td>{user?.phone}</td>
                      <td>{user?.role}</td>
                      <th>
                        {user?.role === "user" ? (
                          <button
                            onClick={() => makeAdmin(user?._id)}
                            className="btn border-non btn-sm"
                          >
                            Make Admin
                          </button>
                        ) : (
                          <button disabled className="btn border-non btn-sm">
                            Make Admin
                          </button>
                        )}
                      </th>
                      <th>
                        {user?.email === currentUser?.email ? (
                          <button disabled className="btn border-non btn-sm">
                            Delete
                          </button>
                        ) : (
                          <button
                            onClick={() => handleDeleteUser(user?._id)}
                            className="btn border-non btn-sm"
                          >
                            Delete
                          </button>
                        )}
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
