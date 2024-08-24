import { useState } from "react";

const DropDown = () => {
  const [isShow, setIsShow] = useState(false);
  const user = false

  return (
    <>
      <div className="dropdown dropdown-end">
        <label onClick={() => setIsShow(!isShow)}  className="btn btn-ghost btn-circle avatar ">
          <div className="w-10 rounded-full">
            {user ? (
              <img alt="user profile" src={""} />
            ) : (
              <img
                alt="user profile"
                src="https://i.postimg.cc/7PS6bh1w/profile.png"
              />
            )}
          </div>
        </label>
      </div>
        {isShow && user ? <ul
          // tabIndex={0}
          className="menu  absolute menu-sm dropdown-content  mt-36 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between">{"user?.displayName"}</a>
          </li>

          <li>
            <p >logout</p>
          </li>
        </ul> : ""}
    </>
  );
};

export default DropDown;