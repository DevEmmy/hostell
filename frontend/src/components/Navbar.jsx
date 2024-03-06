import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import ButtonIcon from "./ButtonIcon";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between gap-1 p-4">
      <ButtonIcon icon={<FiMenu size={25} />} />
      <div>
        <h1 className="text-primary2 text-xl font-bold text-center italic tracking-wider">
          Hostell
        </h1>
      </div>
      <button>
        <ButtonIcon icon={<IoMdNotificationsOutline size={25} />} />
      </button>
    </nav>
  );
};

export default Navbar;
