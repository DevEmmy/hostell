'use client'
import React, { useEffect, useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { FaHouseChimney, FaLocationDot } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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

function HostelDetails() {
  const { bookmark, setBookmark } = useStateContext();
  const params = useParams()
  const {hostelid} = params
  const router = useRouter();
  
  const handleBookmarkHostel = () => {
    setBookmark((prev) => !prev);
  };

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
    <section className="w-full h-full flex flex-col justify-between">
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
          <div className="absolute top-1/2 left-1 -translate-y-1/2 bg-white p-3 rounded-full">
            <FaChevronLeft onClick={prevImage} />
          </div>
          <div className="absolute top-1/2 right-1 -translate-y-1/2 bg-white p-3 rounded-full">
            <FaChevronRight onClick={nextImage} />
          </div>
          <Link
            href={"/"}
            className="absolute top-2 left-3 bg-white p-3 rounded-full"
          >
            <GoArrowLeft />
          </Link>
          <div onClick={handleBookmarkHostel} className="absolute top-2 right-3 p-2 bg-white rounded-full text-primary2">
          {
              bookmark ? <IoHeartSharp  size={30} /> : <IoHeartOutline size={30} />
            }
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
            {/* <h2 className="font-bold capitalize">{hosteldetails.title}</h2> */}
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
        <FaMessage size={35}/>
      </button>
        </div>
      </div>
    </section>
  );
}

export default HostelDetails;
