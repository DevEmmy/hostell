"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Loader from "@/BasicComponents/Loader";
import hall from "../../public/hall.jpg";
import { MdOutlineMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { forgotPassword } from "@/request/request";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const handleSubmit = async () => {
    if(!email) {
      return;
    }
    try {
      setShowLoader(true)
      const response = await forgotPassword(email)
      console.log(response)
     
    } catch (error) {
      setShowLoader(false)
      console.log(error)
    }
    finally{
      setShowLoader(false)
    }

  }
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
          
          <div className="flex items-center justify-center m-3 gap-3">
            <FaLock className="text-primary2" size={30} />
            <h2 className="text-2xl capitalize font-semibold text-gray-800">
              forgot password
            </h2>
          </div>
          <div className="flex flex-col">
            <label className="my-2 capitalize hidden">email address</label>
            <div className="border-2 border-gray-300 py-2 px-3 rounded-2xl flex gap-2 items-center my-3">
              <MdOutlineMail />
              <input
                type="text"
                placeholder="enter your email address"
                className=" focus:outline-none w-full"
                value={email}
                autoComplete="false"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            className="w-full bg-primary2 p-3 rounded-2xl text-white text-center flex items-center justify-center my-5 font-semibold capitalize"
            type="submit"
            onClick={handleSubmit}
          >
           {showLoader ? 
           <div>
             <Loader /> 
           </div>
           : "Submit"}
          </button>
          <Link
            className="text-primary2 capitalize text-center font-semibold"
            href={"/login"}
          >
            <small>login</small>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default ForgotPassword;
