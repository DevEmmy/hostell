import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { FaHouseChimney, FaLocationDot } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import hostel1 from "/hostel1.jpg";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";

function HostelDetails() {
  // const navigate = useNavigate();
  return (
    <section className="w-full h-full flex flex-col justify-between">
      <div className="flex-1">
      <div className="relative">
        <div>
          <img src={hostel1} alt="hostel" />
        </div>
        <Link
          to={"/hostel"}
          className="absolute top-2 left-3 bg-white p-3 rounded-full"
        >
          <GoArrowLeft />
        </Link>
        <p className="absolute top-3 left-2/4 -translate-x-1/2">Details</p>
        <div className="absolute top-2 right-3 p-2 bg-white rounded-full">
          <CiHeart />
        </div>
      </div>
      <div>
        <small className="w-min flex items-center gap-1 text-secondary2 bg-secondary1 rounded-full px-3 py-1 m-3 hover:bg-secondary1">
          <FaHouseChimney size={15} />
          <span className="font-bold">House</span>
        </small>
      </div>
      <div className="m-3">
        <h2 className="font-bold capitalize">Selfcon</h2>
        <div className="flex gap-1 items-center text-gray-400">
          <FaLocationDot size={10} />
          <small className="capitalize">Accord zoo</small>
        </div>
      </div>
      <div className="m-3">
        <h2 className="font-bold text-sm">Description</h2>
        <small className="my-2 text-gray-600">
          Clean Penhouse Bedroom,26sqm, with wifi and tv entertainment(Android
          tv box), hundreds of channels of tv shows, movies, sport,Netflix and
          hot water,...{" "}
          <span className="text-primary2 capitalize">read more</span>
        </small>
      </div>
      <div className="flex items-center justify-between m-3">
        <div className="flex items-center flex-1 gap-3">
          <img className="w-10 rounded-full h-10" src={hostel1} alt="" />
          <div>
            <h2 className="font-semibold leading-3">John Doe</h2>
            <small className="text-gray-500 tracking-tight italic">
              Property agent
            </small>
          </div>
        </div>
        <div className="text-secondary2">
          <FaMessage size={25} />
        </div>
      </div>
      </div>
      <div>
        {/* <Footer /> */}
      </div>
    </section>
  );
}

export default HostelDetails;
