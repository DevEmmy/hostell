"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { login } from "@/request/request";
import Loader from "@/BasicComponents/Loader";
import { MdOutlineMail, MdLockOutline } from "react-icons/md";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import hall from "../../public/hall.jpg";

function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [showLoader, setShowLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    if (!email || !password) {
      setErrorMessage("Email and password cannot be empty.");
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
      return;
    }

    setShowLoader(true);
    try {
      const userData = await login(email, password);
      if (userData.status === 200 || userData.status === 201) {
        setShowLoader(false);
        router.replace("/");
      } else {
        setErrorMessage(userData.message);
        setShowLoader(false);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setShowLoader(false);
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    }
  };

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
          {errorMessage && (
            <p className="bg-red-300 w-full p-3 text-white rounded-lg">
              {errorMessage}
            </p>
          )}
          <h2 className="text-primary2 font-semibold text-3xl mb-5">Log in</h2>
          <div>
            <div className="flex flex-col">
              <label className="my-2 capitalize">email address</label>
              <div className="border-2 border-gray-300 py-2 px-3 rounded-2xl flex gap-2 items-center">
                <MdOutlineMail />
                <input
                  type="text"
                  placeholder="email"
                  className=" focus:outline-none w-full"
                  value={email}
                  autoComplete="false"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="my-2 capitalize">password</label>
              <div className="border-2 border-gray-300 py-2 px-3 rounded-2xl flex gap-2 items-center">
                <MdLockOutline />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="focus:outline-none flex-1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {showPassword ? (
                  <IoIosEyeOff onClick={() => setShowPassword(false)} />
                ) : (
                  <IoIosEye onClick={() => setShowPassword(true)} />
                )}
              </div>
            </div>
            <div className="p-2 text-primary2">
              <Link href={"/forgotpassword"}>
                <small>forgot password?</small>
              </Link>
            </div>
            <button
              onClick={() => handleSubmit()}
              className="w-full bg-primary2 p-4 rounded-2xl text-white text-center flex items-center justify-center my-5 font-semibold capitalize"
              type="submit"
            >
              {showLoader ? <Loader /> : "signin"}
            </button>
          </div>
          <p className="mt-3">
            Already have an account?{" "}
            <Link className="text-primary2 capitalize font-medium" href={"/signup"}>
              signup
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Signin;
