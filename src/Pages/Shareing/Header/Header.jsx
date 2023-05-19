import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { Tooltip } from "@mui/material";

const Header = () => {
  const { user, loggedOut } = useContext(AuthContext);
  const handleLogOut = () => {
    loggedOut()
      .then((result) => {
        console.log("logged Out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const items = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allToys"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          All Toys
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/myToys"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addToys"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Add A Toy
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Blogs
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  bg-slate-50 py-7 px-4 lg:px-28 fixed top-0 left-0 w-full z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {items}
          </ul>
        </div>
        <div className="flex items-center">
          <img
            className="w-20 h-12"
            src="https://i.ibb.co/vHZdfcz/d9gq-oo09-151115.jpg"
            alt=""
          />
          <Link to="/">
            <h1 className="btn text-orange-400 font-sans font-bold btn-ghost normal-case text-xl lg:text-3xl">
              Animal Toys
            </h1>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{items}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <Tooltip title={user.displayName}>
              <img
                src={user.photoURL}
                className="rounded-full w-245 h-10"
                alt=""
              />
            </Tooltip>

            <button
              onClick={handleLogOut}
              className="btn btn-success text-white ms-3"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-success text-white">
              <Link to="/login">Login</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
