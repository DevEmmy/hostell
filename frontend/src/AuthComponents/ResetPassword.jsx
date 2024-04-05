"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loader from "@/BasicComponents/Loader";
import hall from "../../public/hall.jpg";
import { MdLockOutline } from "react-icons/md";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FaLock } from "react-icons/fa";

const ResetPassword = () => {
  return (
    <section className="flex h-screen w-full">
      <div className="w-1/2 h-screen hidden md:block">
        <Image
          src={hall}
          alt="hostel"
          className="object-cover h-screen"
          priority={true}
        />
      </div>

      <div className="w-full md:w-1/2 md:p-5 md:flex items-center justify-center mt-20 md:mt-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="bg-white flex flex-col my-5 px-5 w-full md:w-4/5 h-max md:p-5"
        >
          {/* {errorMessage && (
            <p className="bg-red-300 w-full p-3 text-white rounded-lg">
              {errorMessage}
            </p>
          )} */}
          <div className="flex items-center justify-center m-3 gap-3">
            <FaLock className="text-primary2" size={30} />
            <h2 className="text-2xl capitalize font-semibold text-gray-800">
              reset password
            </h2>
          </div>

          <div className="flex flex-col">
            <label className="my-2 capitalize"> new password</label>
            <div className="border-2 border-gray-300 py-2 px-3 rounded-2xl flex gap-2 items-center">
              <MdLockOutline />
              <input
                type="password"
                placeholder=" new password"
                className="focus:outline-none flex-1"
                //   value={password}
                //   onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="my-2 capitalize">confirm password</label>
            <div className="border-2 border-gray-300 py-2 px-3 rounded-2xl flex gap-2 items-center">
              <MdLockOutline />
              <input
                type="password"
                placeholder="confirm new password"
                className="focus:outline-none flex-1"
                //   value={password}
                //   onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            className="w-full bg-primary2 p-3 rounded-2xl text-white text-center flex items-center justify-center my-5 font-semibold capitalize"
            type="submit"
          >
            reset
          </button>
          {/* <Link
            className="text-primary2 capitalize text-center font-semibold"
            href={"/login"}
          >
            <small>login</small>
          </Link> */}
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
