"use client";
import React from "react";
import { FaHouseChimney, FaLocationDot } from "react-icons/fa6";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import { useStateContext } from "@/Contexts/ContextProvider";

const HostelCard = ({ image, location, price, hostelid }) => {
  const router = useRouter();
  const { bookmark, setBookmark } = useStateContext();

  const handleBookmarkHostel = () => {
    setBookmark((prev) => !prev);
  };

  return (
    <>
      <div
        // href={`/${hostelid}`}
        className="w-full md:w-72 mx-auto my-2"
      >
        <div className="relative w-full h-72 md:w-72">
          <LazyLoadImage
            src={image}
            alt="hostel"
            className="w-full h-full rounded-lg object-cover"
            width={image.width}
            height={image.height}
            onClick={() => {
              router.push(`/${hostelid}`);
            }}
          />
          <small className=" flex items-center gap-1 absolute text-secondary2 bg-white left-2 top-2 rounded-full px-2 py-1 hover:bg-secondary1">
            <FaHouseChimney size={15} />
            <span className="font-bold">House</span>
          </small>
          <small
            onClick={handleBookmarkHostel}
            className="text-primary2 absolute bg-white right-2 top-2 rounded-full p-1"
          >
            {bookmark ? (
              <IoHeartSharp size={35} />
            ) : (
              <IoHeartOutline size={35} />
            )}
          </small>
        </div>
        <div className="p-1">
          <div className="flex gap-1 items-center text-gray-400 my-1">
            <FaLocationDot />
            <small className="capitalize">{location}</small>
          </div>
          <div className="flex items-center justify-between gap-1 px-1">
            <p>₦ {price}</p>
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
