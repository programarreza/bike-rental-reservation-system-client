import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarLink from "./NavbarLink";
import Theme from "./Theme";
import DropDown from "./DropDown";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        Math.abs(scrollY - lastScrollY) > 10
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              onClick={() => setIsOpen(!isOpen)}
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {isOpen && (
              <>
                {" "}
                <ul
                  tabIndex={0}
                  className="menu absolute flex h-auto  menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box  md:w-[600px] "
                >
                  {/* all nav links */}
                  <NavbarLink />
                </ul>
              </>
            )}
          </div>
          <Link to="/" className=" text-xl">
            <img className="w-20" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavbarLink />
          </ul>
        </div>
        <div className="navbar-end ">
          {/* user profile */}
          <Theme />
          <DropDown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
