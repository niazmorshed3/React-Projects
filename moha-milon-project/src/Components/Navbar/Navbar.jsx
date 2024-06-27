import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Logged Out Successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <NavLink to="/">
        <li>
          <a>Home</a>
        </li>
      </NavLink>
      <NavLink to="/login">
        <li>
          <a>Login</a>
        </li>
      </NavLink>
      <NavLink to="/register">
        <li>
          <a>Register</a>
        </li>
      </NavLink>
      <NavLink to="/orders">
        <li>
          <a>Orders</a>
        </li>
      </NavLink>
      {user && (
        <>
          <NavLink to="/profile">
            <li>
              <a>Profile</a>
            </li>
          </NavLink>
          <NavLink to="/documents">
            <li>
              <a>Documents</a>
            </li>
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Moha Milon</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <span>Profile of - {user.displayName}</span>
            <span>
              <img src={user.photoURL} alt="" />
            </span>
            <a onClick={handleLogOut} className=" ml-4 btn btn-sm">
              Sign out
            </a>
          </>
        ) : (
          <NavLink to="/login">
            <button className=" btn btn-sm">Login</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
