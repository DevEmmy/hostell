"use client";
import React, { useState } from "react";
// import { useRouter } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Nav = () => {
  // const router = useRouter()
  const [showSidebar, setShowSidebar] = useState(false);

  const handleMenuClick = () => {
    setShowSidebar((prev) => !prev);
  };
    // const handleProfileClick = () => {
    //   router.push("/profile");
    // };

  return (
    <>
      <nav className="flex items-center justify-between gap-1 p-4">
        <button onClick={handleMenuClick}>
          <FiMenu size={25} />
        </button>
        <div>
          <h1 className="text-primary2 text-xl font-bold text-center italic tracking-wider">
            Hostell
          </h1>
        </div>
        <div className="flex gap-2 items-center ">
          {/* <button onClick={handleProfileClick}>
            <FaUserCircle size={25} />
          </button> */}
          <button>
            <IoMdNotificationsOutline size={25} />
          </button>
        </div>
      </nav>
    

      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
    
    
    </>
  );
};

export default Nav;
