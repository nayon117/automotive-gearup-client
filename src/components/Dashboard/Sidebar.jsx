/* eslint-disable no-unused-vars */
import { useState } from "react";
// Components
import MenuItem from "./MenuItem";
// Icons
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";



import { FaHome } from "react-icons/fa";

import UserMenu from "./UserMenu";
import SellerMenu from "./SellerMenu";
import AdminMenu from "./AdminMenu";
import useRole from "../../hooks/useRole";
import useAuth from "../../hooks/useAuth";
import ToggleBtn from "./ToggleBtn";


const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [isActive, setActive] = useState(false);
  const [role] = useRole()
  const {logOut} = useAuth()
   

  //   For student/teacher menu item toggle button
  const toggleHandler = (event) => {
    setToggle(event.target.checked);
  };
  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
          <img
          className="w-[20%] md:w-[13%] lg:w-[14%] filter invert text-white "
          src="https://i.ibb.co/LZrL6vj/logo-2-fotor-bg-remover-2024031781144.png"
          alt="logo"
        />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center  mx-auto">
            <img
          className="w-[20%] md:w-[13%] lg:w-[14%] filter invert text-white "
          src="https://i.ibb.co/LZrL6vj/logo-2-fotor-bg-remover-2024031781144.png"
          alt="logo"
        />
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* If a user is teacher */}
          {role==='seller' && <ToggleBtn toggleHandler={toggleHandler} />}
            <nav>
              

              {/* Menu Items */}
               
            {role==='user' && <UserMenu/>}
            {role==='seller' ? toggle? <SellerMenu/> : <UserMenu/>:''}
            {role==='admin' && <AdminMenu/>}
            </nav>
          </div>
        </div>

        <div>
          <hr />
          
          <MenuItem
            icon={FaHome}
            label="Home"
            address="/"
          />
          <MenuItem
            icon={FcSettings}
            label="Profile"
            address="/dashboard/profile"
          />
          <button onClick={logOut} className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform">
            <GrLogout className="w-5 h-5" />

            <span   className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
