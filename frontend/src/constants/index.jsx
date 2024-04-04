import { MdExplore } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdFilterAlt } from "react-icons/md";
import { IoMdHome } from "react-icons/io";

export const sidebarLinks = [
  {
    name: "home",
    icon: <IoMdHome />,
  },
  {
    name: "explore",
    icon: <MdExplore />,
  },
  {
    name: "popular",
    icon: <MdFilterAlt />,
  },
  {
    name: "profile",
    icon: <FaUser />,
  },
];
