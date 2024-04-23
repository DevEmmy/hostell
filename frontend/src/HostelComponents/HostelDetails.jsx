'use client'
import React, { useEffect, useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { FaHouseChimney, FaLocationDot } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
import { FaChevronLeft, FaChevronRight, FaLocationArrow } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import hostel1 from '../../public/hall.jpg'
import userImg from "../../public/user.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { hostelDetails } from "@/request/request";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useStateContext } from "@/Contexts/ContextProvider";
import EachHostelReturn from "./EachHostelReturn";

function HostelDetails() {
  const { bookmark, setBookmark } = useStateContext();
  const params = useParams()
  const { hostelid } = params
  const router = useRouter();

  const [hosteldetails, setHosteldetails] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!hostelid) {
    return <p>Loading...</p>; // or handle this case appropriately
  }

  useEffect(() => {
    const fetchHostelDetails = async () => {
      try {
        const result = await hostelDetails(hostelid);
        const hostelResult = result.payload;
        console.log(hostelResult)
        setHosteldetails(hostelResult);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHostelDetails();
  }, []);

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

      {/* <section className="w-full h-full flex flex-col justify-between">
        <div className="flex-1 mb-24">
          <div className="relative">
            <div className="md:h-screen h-64">
              <LazyLoadImage
                // src={hosteldetails.images ? hosteldetails.images[0] : hostel1}
                src={
                  hosteldetails.images
                    ? hosteldetails.images[currentImageIndex]
                    : hostel1
                }
                alt="hostel"
                className="w-full h-full object-cover"
              />
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
          <div className="m-3 flex items-center gap-2">
            <div className="h-12 w-12 bg-primary2 rounded-full">
              <Image
                src={userImg}
                alt="user"
                className="object-cover w-full h-full overflow-hidden"
                priority
                onClick={() => {
                  router.push('/profile/userprofile')
                }}
              />
            </div>
            <Link href={'/profile/userprofile'} className="capitalize flex-1 text-lg">john doe</Link>
            <button className="text-primary2">
              <FaMessage size={35} />
            </button>
          </div>
        </div>
      </section> */}

      <div className="mx-xPadding mt-20">
        <img 
        src={hosteldetails.images}
        // src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg" 
        alt="" className="border border-white shadow-lg h-[300px] object-cover rounded-2xl" />

        <div className="flex flex-col gap-3 mt-10">
          <p className="text-[24px] font-[600]">
            {/* Grace Hostel. */}
            {hosteldetails.title}
          </p>
          <div className="flex gap-2 items-center text-gray-500">
            <FaLocationDot />
            <p>{hosteldetails.location}</p>
          </div>
          <p className="text-[16px] font-[600]">
            {hosteldetails.price}
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-10">
          <p className="text-[20px] font-[600]">
            Description
          </p>
          <p className="text-gray-500">
            {hosteldetails.description}
          </p>

          <p className="font-[500]">
            Available Rooms: {hosteldetails.availableRooms}
          </p>
        </div>

        <div className="my-5 flex flex-col gap-3">
          <p className="text-[20px] font-[600]">Contact Agent</p>

          <div className="agent flex gap-3 items-center">
            <img src="./user.png" alt="" className="rounded-full border-2 border-primary2 w-[80px] object-cover h-[80px]" />
            <div>
              <p className="text-[18px] font-[500]">Emmanuel Olaosebikan</p>
              <p className="text-gray-500 text-[14px]">eolaosebkan60@gmail</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-3">
            <div className="btn" onClick={() => {
              router.push('/profile/userprofile')
            }}>View Profile</div>
            <div className="btn">Send Message</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HostelDetails;
