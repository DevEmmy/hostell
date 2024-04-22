"use client";
import React from "react";
import { MdEdit } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import userImg from "../../public/user.png";
import CustomReturn from "./CustomReturn";

const UserProfile = () => {
  return (
    <>
    <CustomReturn/>
    <section className="w-screen">
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
        <div className="text-center">
          <h2 className="font-semibold m-2 capitalize">
           john doe
          </h2>
          <p className="text-gray-700">johndoe@gmail.com</p>
        </div>
      </div>
      <div className="relative m-5">
 
       

      </div>
    </div>
  </section>
  </>
  )
}

export default UserProfile