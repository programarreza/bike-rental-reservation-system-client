import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../redux/hooks";
import { selectCurrentUser } from "../../../redux/features/auth/authSlice";

const NavbarLink = () => {
  const currentUser = useAppSelector(selectCurrentUser);

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-base ">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#f57c48] underline" : ""
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about-us"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#f57c48] underline" : ""
        }
      >
        About Us
      </NavLink>

      <NavLink
        to="/contact-us"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#f57c48] underline" : ""
        }
      >
        Contact Us
      </NavLink>
      {currentUser ? (
        ""
      ) : (
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#f57c48] underline" : ""
          }
        >
          Login
        </NavLink>
      )}
    </div>
  );
};

export default NavbarLink;
