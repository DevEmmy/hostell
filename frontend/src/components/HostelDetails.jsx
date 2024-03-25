import React, { useEffect, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { FaHouseChimney, FaLocationDot } from "react-icons/fa6";
// import { FaMessage } from "react-icons/fa6";
import hostel1 from "/hostel1.jpg";
import { Link, useParams } from "react-router-dom";
import { hostelDetails } from "../../request";

function HostelDetails() {
  const { hostelid } = useParams();

  const [hosteldetails, setHosteldetails] = useState({});

  useEffect(() => {
    const fetchHostelDetails = async () => {
      try {
        const result = await hostelDetails(hostelid);
        const hostelResult = result.payload;
        console.log(hostelResult);
        setHosteldetails(hostelResult);
        console.log(hostelResult);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHostelDetails();
  }, []);

  return (
    <section className="w-full h-full flex flex-col justify-between">
      <div className="flex-1">
        <div className="relative">
          <div>
            <img src={hosteldetails.images} alt="hostel" />
          </div>
          <Link
            to={"/hostel"}
            className="absolute top-2 left-3 bg-white p-3 rounded-full"
          >
            <GoArrowLeft />
          </Link>
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
        <div className="m-3 flex items-center justify-between">
          <div>
            <h2 className="font-bold capitalize">{hosteldetails.title}</h2>
            <div className="flex gap-1 items-center text-gray-400">
              <FaLocationDot size={10} />
              <small className="capitalize">{hosteldetails.location}</small>
            </div>
          </div>
          <div>
            <p className="font-semibold text-xl">
              ₦{" "}
              {hosteldetails.price ? hosteldetails.price.toLocaleString() : ""}
            </p>
          </div>
        </div>
        <div className="m-3">
          <h2 className="font-bold text-sm">Description</h2>
          <small className="my-2 text-gray-600 capitalize">
            {hosteldetails.description}
          </small>
        </div>
        <div className="m-3">
          <h2 className="font-bold text-sm">Features</h2>
          <small className="my-2 text-gray-600 capitalize">
            {hosteldetails.features && hosteldetails.features.join(", ")}
          </small>
        </div>
        <div className="m-3">
          <h2 className="font-bold text-sm">Available Rooms</h2>
          <small className="my-2 text-gray-600 capitalize">
            {hosteldetails.availableRooms}
          </small>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default HostelDetails;
