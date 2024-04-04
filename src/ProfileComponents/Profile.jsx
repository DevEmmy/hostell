"use client";
import React from "react";
import { MdEdit } from "react-icons/md";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import HostelCard from "../components/HostelCard";
// import hostel1 from "/hostel1.jpg";

function Profile() {
  const router = useRouter();
  const user = JSON.parse(localStorage.getItem("user"));

  const firstName = user.payload.user.firstName
  const lastName = user.payload.user.lastName
  const email = user.payload.user.email
  const userType = user.payload.user.userType
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
          <div className="w-36 h-36 rounded-full bg-primary2"></div>
          <div>
            <Link className="p-2 flex items-center gap-2 text-primary2 capitalize" href={"/profile/editprofile"}>
              <MdEdit /> edit profile
            </Link>
          </div>
          <div className="text-center">
            <h2 className="font-semibold">
              {firstName} {lastName}
            </h2>
          </div>
        </div>
        <div className="relative m-5">
          <div>
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
          </div>
          {userType === "AGENT" && (
            <div
              onClick={() => {
                router.push("/uploadhostel");
              }}
              className="absolute top-2 right-2 flex gap-1 capitalize items-center bg-primary2 py-1 px-2 rounded text-white text-sm font-bold"
            >
              <MdEdit size={25} /> add hostel
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
