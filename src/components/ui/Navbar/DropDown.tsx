import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  logout,
  selectCurrentUser,
} from "../../../redux/features/auth/authSlice";
import { useGetMeQuery } from "../../../redux/features/user/userApi";

const DropDown = () => {
  const [isShow, setIsShow] = useState(false);
  const [shouldRefetch, setShouldRefetch] = useState(false);
  const dispatch = useAppDispatch();

  const currentUser = useAppSelector(selectCurrentUser);
  const { data: userData, refetch } = useGetMeQuery(currentUser?.email, {
    skip: !currentUser?.email && !shouldRefetch,
  });

  const user = userData?.data;

  const handleLogout = () => {
    dispatch(logout());
    setShouldRefetch(true); 
  };

  useEffect(() => {
    if (shouldRefetch) {
      refetch();
      setShouldRefetch(false); 
    }
  }, [shouldRefetch, refetch]);

  return (
    <>
      <div className="dropdown dropdown-end">
        <label
          onClick={() => setIsShow(!isShow)}
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            {user ? (
              <img alt="user profile" src={user?.image} />
            ) : (
              <img
                alt="user profile"
                src="https://i.postimg.cc/7PS6bh1w/profile.png"
              />
            )}
          </div>
        </label>
      </div>
      {isShow && user ? (
        <ul className="menu absolute menu-sm dropdown-content mt-36 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">{user?.name}</a>
          </li>
          <li>
            <a className="justify-between">{user?.email}</a>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      ) : null}
    </>
  );
};

export default DropDown;
