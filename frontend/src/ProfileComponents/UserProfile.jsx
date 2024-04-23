"use client";
import React from "react";
import { MdEdit } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import userImg from "../../public/user.png";
import CustomReturn from "./CustomReturn";
import { RiCalendar2Line, RiMailLine, RiPhoneLine, RiWhatsappLine } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";

const UserProfile = () => {
  return (
    <section className="w-screen">
      <CustomReturn />
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col items-center gap-5 m-5">
        <div className="w-36 h-36 rounded-full bg-secondary1 flex items-center justify-center overflow-hidden">
          <Image
            src={userImg}
            alt="user"
            className="object-cover w-full h-full"
            priority={true}
          />
        </div>
        <div className="flex gap-3 flex-col">
          <div className="text-center">
            <h2 className="font-semibold">
              Emmanuel Olaosebikan
            </h2>
            <p className="text-gray-500 flex gap-2 items-center justify-center"><RiMailLine /> eolaosebikan60@gmail.com</p>
            <p className="text-gray-500 flex gap-2 items-center justify-center"> <RiCalendar2Line /> Joined 2024</p>
          </div>

          <div className="options">
            <div><RiWhatsappLine /></div>
            <div><RiMailLine /></div>
            <div><RiPhoneLine /></div>
          </div>
          
        </div>

      </div>
      <div className="relative m-5">
        {/* <div>
          <p className="p-2 text-sm">
            <strong className="italic"> Firstname:</strong> {firstName}
          </p>
          <p className="p-2 text-sm">
            <strong className="italic"> Lastname:</strong> {lastName}
          </p>
          <p className="p-2 text-sm">
            <strong className="italic"> Email: </strong>
            {email}
          </p>
        </div> */}
        

        {/* <div className=" my-5 p-3">
          <h3 className="font-semibold capitalize"> {userType === "AGENT" ? 'Hostel updates' : 'Saved Hostel'}</h3>
          <div className="flex flex-wrap">
            <HostelCard
              price="₦ 120,000.00"
              location="accord,zoo,funaab"
              image={hostel1}
            />
            <HostelCard
              price="₦ 120,000.00"
              location="accord,zoo,funaab"
              image={hostel1}
            />
            <HostelCard
              price="₦ 120,000.00"
              location="accord,zoo,funaab"
              image={hostel1}
            />
          </div>
        </div> */}
      </div>
    </div>

    <div className="mx-xPadding my-10">
      <p className="text-[20px] font-[600]">Uploaded Hostels</p>


    </div>
  </section>
  )
}

export default UserProfile