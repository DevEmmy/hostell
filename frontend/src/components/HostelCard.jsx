import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaHouseChimney, FaLocationDot } from "react-icons/fa6";
// import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const HostelCard = ({ image, location, price }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/hosteldetails/:hostelID`);
  };
  return (
    <>
      <div
        onClick={() => handleNavigate()}
        className="w-full md:w-72 mx-auto my-2 pointer-events-none"
      >
        <div className="relative w-full md:h-64 md:w-72">
          <img
            className="w-full h-full rounded-lg pointer-events-none"
            src={image}
            alt="hostel"
          />
          <small className=" flex items-center gap-1 absolute text-secondary2 bg-white left-2 top-2 rounded-full px-2 py-1 hover:bg-secondary1">
            <FaHouseChimney size={15} />
            <span className="font-bold">House</span>
          </small>
          <small className="absolute bg-white right-2 top-2 rounded-full p-1 hover:bg-secondary1">
            <CiHeart size={20} />
          </small>
        </div>
        <div className="p-1">
          <div className="flex gap-1 items-center text-gray-400 my-1">
            <FaLocationDot />
            <small className="capitalize">{location}</small>
          </div>
          <div className="flex items-center justify-between gap-1 px-1">
            <p>{price}</p>
            <button className="capitalize bg-secondary2 text-white font-bold px-4 py-2 text rounded-lg">
              bid now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostelCard;
