import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../request";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    login(email, password);
    email("");
    password("");
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
            <Link className="text-primary2 capitalize font-medium" to="/signup">
              Signup
            </Link>
          </p>
        </div>
      </div>
      <form className="bg-secondary2 text-white w-full max-w-[500px] mx-auto p-5 h-max rounded">
        <h2 className="text-center font-semibold text-lg m-5">
          Let's get you signed in
        </h2>
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col w-full gap-1">
            <label className="font-normal capitalize">Email</label>
            <input
              className="bg-secondary1 text-gray-700 p-2 rounded focus:outline-none "
              type="email"
              placeholder="email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label className="font-normal capitalize">Password</label>
            <input
              className="bg-secondary1 text-gray-700 p-2 rounded focus:outline-none "
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="w-full bg-white p-3 rounded text-secondary2 my-2 font-bold"
            type="submit"
            onSubmit={() => handleSubmit()}
          >
            Login
          </button>
        </div>
      </form>
    </section>
  );
}

export default Signin;
