import { NavLink } from "react-router-dom";

const NavbarLink = () => {
  return (
    <div className="flex gap-8 text-base ">
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
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#f57c48] underline" : ""
        }
      >
       Login
      </NavLink>
    </div>
  );
};

export default NavbarLink;
