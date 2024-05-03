"use client";
import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight, FaLocationArrow } from "react-icons/fa";
// import hostel1 from "../../public/hall.jpg";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import EachHostelReturn from "./EachHostelReturn";
import { useGetHostelDetails } from "@/store/hosteldetails";

function HostelDetails() {
  const params = useParams();
  const { hostelid } = params;
  const router = useRouter();
  const { hostelDetails } = useGetHostelDetails(hostelid);

  const [hosteldetails, setHosteldetails] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const [bookmark, setBookmark] = useState(false)

  if (!hostelid) {
    return <p>Loading...</p>; // or handle this case appropriately
  }

  useEffect(() => {
    const fetchHostelDetails = async () => {
      try {
        // const result = await hostelDetails(hostelid);
        const hostelResult = hostelDetails;
        // console.log(hostelResult);
        setHosteldetails(hostelResult);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHostelDetails();
  }, [hostelDetails]);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? hosteldetails.images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === hosteldetails.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <EachHostelReturn />

      <div className="mx-xPadding mt-20">
        <div className="relative">
          <img
            src={
              hosteldetails?.images
                ? hosteldetails.images[currentImageIndex]
                : ""
            }
            alt=""
            className="border border-white shadow-lg h-[300px] object-cover rounded-2xl"
          />
          <div>
            <FaChevronLeft onClick={prevImage} size={40} className="absolute top-1/2 -left-3 bg-white text-primary2 p-2 rounded-full -translate-y-1/2 shadow"/>
            <FaChevronRight onClick={nextImage} size={40} className="absolute top-1/2 -right-3 bg-white text-primary2 p-2 rounded-full -translate-y-1/2 shadow"/>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-10">
          <p className="text-[24px] font-[600]">
            {/* Grace Hostel. */}
            {hosteldetails?.title}
          </p>
          <div className="flex gap-2 items-center text-gray-500">
            <FaLocationDot />
            <p>{hosteldetails?.location}</p>
          </div>
          <p className="text-[16px] font-[600]">{hosteldetails?.price}</p>
        </div>

        <div className="flex flex-col gap-3 mt-10">
          <p className="text-[20px] font-[600]">Description</p>
          <p className="text-gray-500">{hosteldetails?.description}</p>

          <p className="font-[500]">
            Available Rooms: {hosteldetails?.availableRooms}
          </p>
        </div>

        <div className="my-5 flex flex-col gap-3">
          <p className="text-[20px] font-[600]">Contact Agent</p>

          <div className="agent flex gap-3 items-center">
            <img
              src="./user.png"
              alt=""
              className="rounded-full border-2 border-primary2 w-[80px] object-cover h-[80px]"
            />
            <div>
              <p className="text-[18px] font-[500]">Emmanuel Olaosebikan</p>
              <p className="text-gray-500 text-[14px]">eolaosebkan60@gmail</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-3">
            <div
              className="btn"
              onClick={() => {
                router.push("/profile/userprofile");
              }}
            >
              View Profile
            </div>
            <div className="btn">Send Message</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HostelDetails;
