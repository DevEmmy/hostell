import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../request";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [student, setStudent] = useState(true);

  const handleSubmit = () => {
    signup(firstname, lastname, email, password, student);
    firstname("");
    lastname("");
    email("");
    password("");
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
      <form className="bg-secondary2 text-white w-full max-w-[500px] mx-auto p-5 h-max rounded">
        <h2 className="text-center font-semibold text-lg m-5">
          Let's get you signed up
        </h2>
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col w-full gap-1">
            <label className="font-normal capitalize">Firstname</label>
            <input
              className="bg-secondary1 text-gray-700 p-2 rounded focus:outline-none "
              type="text"
              placeholder="firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label className="font-normal capitalize">Lastname</label>
            <input
              className="bg-secondary1 text-gray-700 p-2 rounded focus:outline-none "
              type="text"
              placeholder="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
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
          <div className="flex items-center gap-5 justify-start w-full">
            <small>Are you going to be a student or an agent?</small>
            <div className="flex gap-1 items-center bg-white p-2 text-primary2 rounded">
              <input
                className="font-semibold"
                type="radio"
                name="agentOrStudent"
                id="student"
              />
              <label className="capitalize font-medium" htmlFor="student">
                student
              </label>
            </div>
          </div>
          <button
            className="w-full bg-white p-3 rounded text-secondary2 my-2 font-bold"
            type="submit"
          >
            Signup
          </button>
        </div>
      </form>
    </section>
  );
}

export default Signup;
