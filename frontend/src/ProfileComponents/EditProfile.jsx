import React from "react";
import Return from "./Return";
import { MdOutlineMail } from "react-icons/md";

const EditProfile = () => {
  return (
    <>
      <Return />

      <section className="container mx-auto p-5">
        <h3 className="m-3 text-center capitalize text-primary2 text-xl font-medium">
          Edit your profile
        </h3>
        <form className="w-full">
          <div className="my5">
            <input
              className="border-2 border-gray-400 py-2 px-3 rounded m-2 w-full"
              type="text"
              placeholder="firstname"
              required
            />
          </div>
          <div className="my-5">
            <input
              className="border-2 border-gray-400 py-2 px-3 rounded m-2 w-full"
              type="text"
              placeholder="lastname"
              required
            />
          </div>
          <div className="border-2 border-gray-400 py-2 px-3 rounded flex gap-2 items-center m-2 my-5 w-full">
            <MdOutlineMail />
            <input
              type="text"
              placeholder="email"
              className=" focus:outline-none w-full"
              // value={email}
              autoComplete="false"
              // onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button
            className="w-full bg-primary2 p-3 rounded text-white text-center flex items-center justify-center mx-2 my-8 font-semibold capitalize"
            type="submit"
          >
            submit
          </button>
        </form>
      </section>
    </>
  );
};

export default EditProfile;
