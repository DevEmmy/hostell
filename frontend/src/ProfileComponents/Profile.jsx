"use client";
import React from "react";
import { MdEdit } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import userImg from "../../public/user.png";
// import HostelCard from "../components/HostelCard";
// import hostel1 from "/hostel1.jpg";

function Profile() {
  const router = useRouter();
  const user = JSON.parse(localStorage.getItem("user"));

  const firstName = user.payload.user.firstName;
  const lastName = user.payload.user.lastName;
  const email = user.payload.user.email;
  const userType = user.payload.user.userType;
  // const firstName =
  //   user && user.payload && user.payload.user
  //     ? user.payload.user.firstName
  //     : "";
  // const lastName =
  //   user && user.payload && user.payload.user ? user.payload.user.lastName : "";
  // const email =
  //   user && user.payload && user.payload.user ? user.payload.user.email : "";
  // const userType = user && user.payload ? user.payload.user.userType : "";

  return (
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
          <div>
            <Link
              className="p-2 flex items-center gap-2 bg-primary2 text-white rounded capitalize"
              href={"/profile/editprofile"}
            >
              <MdEdit /> edit profile
            </Link>
          </div>
          <div className="text-center">
            <h2 className="font-semibold m-2">
              {firstName} {lastName}
            </h2>
            <p className="text-gray-700">{email}</p>
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
          {userType === "AGENT" && (
            <div
              onClick={() => {
                router.push("/uploadhostel");
              }}
              className="fixed bottom-5 right-5 flex gap-1 capitalize items-center bg-primary2 p-3 rounded-full text-white text-sm"
            >
              <FiPlus size={30} />
            </div>
          )}

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
    </section>
  );
}

export default Profile;
