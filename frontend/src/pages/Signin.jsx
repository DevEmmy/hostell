import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../request";
import { Loader } from "../components";
import { MdOutlineMail, MdLockOutline } from "react-icons/md";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

function Signin() {
  const navigate = useNavigate();
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
        navigate("/hostel");
      } else {
        setErrorMessage(userData.message);
        setShowLoader(false);
        setTimeout(() => {
          setErrorMessage("");
        }, 5000);
      }
    } catch (error) {
      // console.error("Login failed:", error);
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
        <img
          src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zdGVsfGVufDB8fDB8fHww"
          className="object-cover h-screen"
          alt=""
        />
      </div>

      <div className="w-full md:w-1/2 md:p-5 md:flex items-center justify-center mt-20 md:mt-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="bg-white flex flex-col my-5 px-5 w-full h-max md:p-5"
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
            <button
              onClick={() => handleSubmit()}
              className="w-full bg-primary2 p-3 rounded-2xl text-white text-center flex items-center justify-center my-5 font-semibold capitalize"
              type="submit"
            >
              {showLoader ? <Loader /> : "signin"}
            </button>
          </div>
          <p className="mt-3">
            Already have an account?{" "}
            <Link className="text-primary2 capitalize font-medium" to="/">
              signup
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Signin;
