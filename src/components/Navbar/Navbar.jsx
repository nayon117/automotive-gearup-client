import { useContext } from "react";
import {  Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="font-medium text-base">    
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-medium text-base">    
        <NavLink to="/addproduct">Add Product</NavLink>
      </li>
      <li className="font-medium text-base"> 
        <NavLink to="/mycart">My Cart</NavLink> 
      </li>
      
    </>
  );

//   context
  const { user, logOut } = useContext(AuthContext);

//   handle onclick
  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("log out successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="navbar py-4 bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
              <img className="w-1/6 filter invert " src="https://i.ibb.co/CVbmR1K/car.png" alt="logo" />
              <p className="text-xl font-bold" >GearUp</p>
      </div>
      <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                  {navLinks}
              </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm whitespace-nowrap  btn-ghost">
                  {user.displayName}
                </button>
              </li>

              <li>
                <button
                  onClick={handleSignOut}
                  className="btn btn-sm whitespace-nowrap  btn-ghost"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm btn-neutral">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;