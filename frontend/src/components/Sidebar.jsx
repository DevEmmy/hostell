import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";
import { sidebarLinks } from "../constants";
import { useStateContext } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";

function Sidebar() {
  const { setActiveMenu } = useStateContext();

  const handleMenuClick = () => {
    setActiveMenu((prev) => !prev);
  };

  return (
    <aside className="absolute z-10 top-0 left-0 bg-white h-full w-64">
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
    </aside>
  );
}

export default Sidebar;
