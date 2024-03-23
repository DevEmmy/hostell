import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../request";
import { Loader } from "../components";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showLoader, setShowLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async () => {
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
    <section>
      <div className="flex items-center justify-between w-full max-w-screen-lg mx-auto p-5 mb-20">
        <h1 className="text-primary2 text-xl font-bold text-center italic tracking-wider">
          Hostell
        </h1>
        <div>
          <p>
            No account yet?{" "}
            <Link className="text-primary2 capitalize font-medium" to="/">
              Signup
            </Link>
          </p>
        </div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-zinc-50 w-full max-w-[500px] mx-auto p-5 h-max rounded md:shadow-xl"
      >
        <h2 className="text-center text-primary2 font-semibold text-lg m-5">
          Let's get you signed in
        </h2>
        <div className="h-16">
          {errorMessage && (
            <p className="bg-red-300 w-full p-3 text-white rounded-lg">{errorMessage}</p>
          )}
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col w-full gap-1 m-3">
            <label className="hidden">Email</label>
            <input
              className="bg-white rounded-lg border-2 border-secondary2 text-gray-700 p-2 rounded focus:outline-none "
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col w-full gap-1 m-3">
            <label className="hidden">Password</label>
            <input
              className="bg-white rounded-lg border-2 border-secondary2 text-gray-700 p-2 rounded focus:outline-none "
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Link className="m-3 capitalize text-primary2" to={"/"}>
              forget password?
            </Link>
          </div>

          <button
            onClick={() => handleSubmit()}
            className="w-full bg-secondary2 p-3 rounded text-white text-center flex items-center justify-center my-2 font-bold"
            type="submit"
          >
            {showLoader ? <Loader/> : 'Login'}
          </button>
         
        </div>
      </form>
    </section>
  );
}

export default Signin;
