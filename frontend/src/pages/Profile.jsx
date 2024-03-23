import React from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import HostelCard from "../components/HostelCard";
import hostel1 from "/hostel1.jpg";
import { useNavigate } from "react-router-dom";




function Profile() {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"));
 
    const firstName = user && user.payload && user.payload.user ? user.payload.user.firstName : '';
    const lastName = user && user.payload && user.payload.user ? user.payload.user.lastName : '';
    const email = user && user.payload && user.payload.user ? user.payload.user.email : '';
    const userType = user && user.payload ? user.payload.userType : '';
  
  return (
    <section className="w-screen">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col items-center gap-5 m-5">
          <div className="w-36 h-36 rounded-full bg-secondary2"></div>
          <div className="text-center">
            <h2 className="font-semibold">John Doe</h2>
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
          {userType === 'AGENT' && (
  <div onClick={() => {
    navigate('/hostel/addhostel')
  }} className="absolute top-2 right-2 flex gap-1 capitalize items-center bg-secondary2 py-1 px-2 rounded text-white text-sm font-bold">
  <IoAddCircleSharp size={25} /> add hostel
</div>
          )}


          <div className=" my-5 p-3">
            <h3 className="font-semibold capitalize"> {userType === 'AGENT' ? 'Hostel updates' : 'Saved Hostel'}</h3>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
