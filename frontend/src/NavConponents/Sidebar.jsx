'use client'
import React from "react";
import { IoCloseCircleSharp, IoLogOut } from "react-icons/io5";
import { MdExplore } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdFilterAlt, MdMessage } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Sidebar({ showSidebar, setShowSidebar }) {
  const router = useRouter()
  const sidebarLinks = [
    {
      name: "home",
      route: "/",
      icon: <IoMdHome />,
    },
    {
      name: "explore",
      route: "/recommended",
      icon: <MdExplore />,
    },
    {
      name: "popular",
      route: "/popular",
      icon: <MdFilterAlt />,
    },
    // {
    //   name: "messages",
    //   route: "/messages",
    //   icon: <MdMessage />,
    // },
    {
      name: "profile",
      route: "/profile",
      icon: <FaUser />,
    },
  ];
  //   const navigate = useNavigate()
  //   const { setActiveMenu } = useStateContext();

  //   const handleMenuClick = () => {
  //     setActiveMenu((prev) => !prev);
  //   };
    const handleLogout = () => {
      localStorage.removeItem('user')
      handleClose()
      router.push('/login')
    }

  const handleClose = () => {
    setShowSidebar(false);
  };

  return (
    <div onClick={() => {
      setShowSidebar(false)
    }} className={`${showSidebar ? 'bg__overlay' : ''}`}>
    <aside
      className={`absolute z-10 top-0 ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      } bg-white h-full w-64 transition-all duration-1000`}
    >
      <div className="w-full p-3 mb-5 flex items-center justify-between">
        <h1 className="text-primary2 text-xl font-bold text-left italic tracking-wider">
          Hostell
        </h1>
        <button onClick={handleClose}>
          <IoCloseCircleSharp size={30} />
        </button>
      </div>
      <div className="p-3">
        {sidebarLinks.map((link, i) => (
          <Link
            key={i}
            onClick={handleClose}
            href={link.route}
            className="flex items-center justify-start py-3 gap-2 capitalize font-medium hover:text-gray-700"
          >
            <span>{link.icon}</span>
            {link.name}
          </Link>
        ))}
      </div>
      <button onClick={handleLogout} className="absolute bottom-20 text-center flex items-center gap-2 m-3 font-medium text-lg">
        <IoLogOut size={25} /> logout
      </button>
    </aside>
    </div>
  );
}

export default Sidebar;
