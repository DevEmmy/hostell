import React from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import ButtonIcon from "./ButtonIcon";
import { useStateContext } from "../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { setActiveMenu } = useStateContext();

  const handleMenuClick = () => {
    setActiveMenu((prev) => !prev);
  };
  const handleProfileClick = () => {
    navigate("/hostel/profile");
  };

  return (
    <nav className="flex items-center justify-between gap-1 p-4">
      <ButtonIcon icon={<FiMenu size={25} />} click={handleMenuClick} />
      <div>
        <h1 className="text-primary2 text-xl font-bold text-center italic tracking-wider">
          Hostell
        </h1>
      </div>
      <div className="flex gap-2 items-center ">
        <button className="text-secondary2" onClick={handleProfileClick}>
          <ButtonIcon icon={<FaUserCircle size={25} />} />
        </button>
        <button>
          <ButtonIcon icon={<IoMdNotificationsOutline size={25} />} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
