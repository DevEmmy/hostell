import React from "react";
import facebook from "/Facebook.svg";
import instagram from "/IG.svg";
import twitter from "/X.svg";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="bg-gray-700 p-5 mt-5">
      <div className="w-full md:max-w-screen-lg mx-auto">
        <div className="flex items-center justify-between my-5">
          <h1 className="text-white text-xl font-bold italic tracking-wider">
            Hostell
          </h1>
          <div className="flex gap-3 cursor-pointer">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
        <div className="text-white text-center tracking-tighter capitalize">
          <p>{date} &copy; Copyrights. all rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
