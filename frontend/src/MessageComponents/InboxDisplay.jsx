"use client";
import React, { useRef, useState, useEffect } from "react";
import Return from "./Return";
import userImg from "../../public/user.png";
import Image from "next/image";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import { Stick } from "next/font/google";

const InboxDisplay = () => {
  const messageInput = useRef();
  const [focus, setFocus] = useState(false);
  // const handleFocus = () => {
  //   const messageFocus = messageInput.current.focus()
  //   setFocus(messageFocus)
  // }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight < 500) {
        setFocus(true);
      } else {
        setFocus(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const messages = [
    {
      text: "Hey man",
      me: true,
    },
    {
      text: "How're you doing",
      me: false,
    },
    {
      text: "Very well",
      me: true,
    },
  ];

  return (
    <section className="relative">
      <Return />
      <div className="flex flex-col items-center justify-center border-b-2 border-gray-300 p-2">
        <div className="h-24 w-24">
          <Image src={userImg} alt="profile pic" className="object-cover" />
        </div>
        <div>
          <h2 className=" capitalize font-semibold text-xl">john doe</h2>
        </div>
      </div>
      <div>
        {messages.map((message, i) => {
          return (
            <div
              key={i}
              className={`rounded-2xl  p-3 flex ${
                message.me == true && "justify-end"
              }`}
            >
              <p
                className={`${
                  message.me == true
                    ? "bg-white text-gray-500"
                    : "bg-primary2 text-white"
                } shadow-lg p-3 rounded-xl text-sm `}
              >
                {message.text}
              </p>
            </div>
          );
        })}
      </div>

      <div
        // style={{ position: "fixed", bottom: focus ? "500px" : "0" }}
        className={`sender grid grid-cols-[1fr_8fr_1fr] ${
          focus ? "static" : "fixed"
        }  bottom-0 left-0 bg-white shadow-lg right-0 w-full px-2 py-2 items-center gap-2 border-t border-t-gray-300`}
      >
        <div className="flex items-center justify-center">
          <HiPhoto />
        </div>
        <input
          onClick={() => setFocus(true)}
          type="text"
          className="bg-transparent focus:outline-none w-full p-2 border border-gray-300 rounded-full"
          placeholder="message..."
          ref={messageInput}
        />
        <div className="p-3 flex items-center justify-center bg-gray-50 border border-gray-300 rounded-full">
          <HiPaperAirplane />
        </div>
      </div>
    </section>
  );
};

export default InboxDisplay;
