import {
  useGetAllUsersQuery,
  useUpdateUserMutation,
} from "../../redux/features/user/userApi";

const UserManagement = () => {
  const { data } = useGetAllUsersQuery(undefined);
  const userData = data?.data;
  const [updateUser] = useUpdateUserMutation();

  const makeAdmin = (id: string) => {
    console.log(id);
    const data = { role: "admin" };
    const args = { id, data };
    updateUser(args);
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
                  <th>address</th>
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
                      <td>{user?.address}</td>
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
                        <button
                          // onClick={() => handleDeleteBike(bike?._id)}
                          className="btn border-non btn-xs"
                        >
                          Delete
                        </button>
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
