"use client";
import React from "react";
import { FaHouseChimney, FaLocationDot } from "react-icons/fa6";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import userImg from "../../public/user.png";
import { useRouter } from "next/navigation";
import { useStateContext } from "@/Contexts/ContextProvider";
import Image from "next/image";

const HostelCard = ({ image, location, price, hostelid, title }) => {
  const router = useRouter();
  const { bookmark, setBookmark } = useStateContext();

  const handleBookmarkHostel = () => {
    setBookmark((prev) => !prev);
  };

  return (
    <>
      <div
        // href={`/${hostelid}`}
        className="w-full md:w-72 mx-auto my-2 border p-2 rounded-2xl"
      >
        <div className="m-2 flex gap-2 items-center">
          <Image
            src={userImg}
            alt="user"
            className="w-14 h-14 object-cover bg-secondary1 rounded-full"
            priority
          />
          <h3 className="capitalize font-medium text-lg">John doe</h3>
        </div>
        <div className="relative w-full h-[300px] my-3">
          <LazyLoadImage
            src={image}
            alt="hostel"
            className="w-full h-full rounded-2xl object-cover"
            width={image.width}
            height={image.height}
            onClick={() => {
              router.push(`/${hostelid}`);
            }}
          />
          <small
            onClick={handleBookmarkHostel}
            className="text-primary2 absolute bg-white right-2 top-2 rounded-full p-1"
          >
            {bookmark ? (
              <IoHeartSharp size={30} />
            ) : (
              <IoHeartOutline size={30} />
            )}
          </small>
        </div>
        <div className="p-1">
          <h4 className="text-[22px] font-medium my-2">{title}</h4>
          <p className="text-[16px] text-gray-500">₦ {price}</p>
          <div className="flex gap-1 text-[16px] items-center my-2">
            <FaLocationDot />
            <p className="capitalize">{location}</p>
          </div>
          <button onClick={() => {
            router.push(`/${hostelid}`);
          }} className=" capitalize bg-primary2 text-white w-full p-3 text-xl rounded-lg">
            enquire now
          </button>
        </div>
      </div>
    </>
  );
};

export default HostelCard;
