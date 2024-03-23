import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../request";
import { Loader } from "../components";

function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
    try{
      setShowLoader(true);
      const userData = await signup(
        firstName,
        lastName,
        email,
        password,
        userType
      );
      console.log(userData)
      if (userData.status === 200 || userData.status === 201) {
        setTimeout(() => {
          setShowLoader(false);
        }, 5000); 
        navigate("/hostel");
      }else{
        setShowLoader(false)
        setErrorMessage(userData.message);
      }
    }catch (error) {
      // console.error("Login failed:", error);
      setErrorMessage(error.message);
      setShowLoader(false);
      setTimeout(() => {
        setErrorMessage("");
      }, 5000); 
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between w-full max-w-screen-lg mx-auto p-5">
        <h1 className="text-primary2 text-xl font-bold text-center italic tracking-wider">
          Hostell
        </h1>
        <div>
          <p>
            Already have an account?{" "}
            <Link className="text-primary2 capitalize font-medium" to="/signin">
              login
            </Link>
          </p>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-zinc-50  w-full max-w-[500px] mx-auto p-5 h-max rounded md:shadow-xl"
      >
        <h2 className="text-center text-primary2 font-semibold text-lg m-5">
          Let's get you signed up
        </h2>
        <div className="h-16">
          {errorMessage && (
            <p className="bg-red-300 w-full p-3 text-white rounded-lg">{errorMessage}</p>
          )}
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col w-full gap-1 my-3">
            <label className="hidden">Firstname</label>
            <input
              className="bg-white rounded-lg border-2 border-secondary2 text-gray-700 p-2 rounded focus:outline-none "
              type="text"
              placeholder="firstname"
              value={firstName}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col w-full gap-1 my-3">
            <label className="hidden">Lastname</label>
            <input
              className="bg-white rounded-lg border-2 border-secondary2 text-gray-700 p-2 rounded focus:outline-none "
              type="text"
              placeholder="lastname"
              value={lastName}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col w-full gap-1 my-3">
            <label className="hidden">Email</label>
            <input
              className="bg-white rounded-lg border-2 border-secondary2 text-gray-700 p-2 rounded focus:outline-none "
              type="email"
              placeholder="email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col w-full gap-1 my-3">
            <label className="hidden">Password</label>
            <input
              className="bg-white rounded-lg border-2 border-secondary2 text-gray-700 p-2 rounded focus:outline-none "
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center gap-5 justify-start w-full">
            <div className="flex gap-1 items-center bg-white p-2 text-primary2 rounded">
              <input
                className="font-semibold"
                type="checkbox"
                name="agent"
                id="agent"
                onChange={(e) => {
                  const agent = e.target.checked;
                  setUserType(agent ? "AGENT" : "BASIC");
                }}
              />
              <label
                className="capitalize font-medium bg-secondary2 text-white py-2 px-4 rounded"
                htmlFor="agent"
              >
                agent
              </label>
            </div>
          </div>
          <button
            onClick={() => handleSubmit()}
            className="w-full bg-secondary2 p-3 rounded text-white text-center flex items-center justify-center my-2 font-bold"
            type="submit"
          >
            {showLoader ? <Loader/> : 'Signup'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default Signup;
