import React from "react";
import { IoCloseCircleSharp, IoLogOut } from "react-icons/io5";
import { sidebarLinks } from "../constants";
import { useStateContext } from "../contexts/ContextProvider";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate()
  const { setActiveMenu } = useStateContext();

  const handleMenuClick = () => {
    setActiveMenu((prev) => !prev);
  };
  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/signin')
  }

  return (
    <aside className="absolute z-10 top-0 left-0 bg-white h-screen w-64">
      <div className="w-full p-3 mb-5 flex items-center justify-between">
        <h1 className="text-primary2 text-xl font-bold text-left italic tracking-wider">
          Hostell
        </h1>
        <button onClick={handleMenuClick}>
          <IoCloseCircleSharp size={30} />
        </button>
      </div>
      <div className="p-3">
        {sidebarLinks.map((link) => (
          <Link
            to={link.name}
            className="flex items-center justify-start py-3 gap-2 capitalize font-semibold hover:text-gray-700"
            href="#!"
            key={link.name}
            onClick={handleMenuClick}
          >
            <span>{link.icon}</span>
            {link.name}
          </Link>
        ))}
      </div>
      <button onClick={handleLogout} className="absolute bottom-2 text-center flex items-center gap-2 m-3 font-bold text-lg">
       <IoLogOut size={25}/> logout
      </button>
    </aside>
  );
}

export default Sidebar;
