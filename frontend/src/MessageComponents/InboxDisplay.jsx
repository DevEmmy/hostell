"use client";
import React, { useState, useEffect } from "react";
import Return from "./Return";
import userImg from "../../public/user.png";
import Image from "next/image";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import { HiX } from "react-icons/hi";
// import { io } from "socket.io-client";
import FileBase64 from "react-file-base64";
// import { Stick } from "next/font/google";

// const socket = io("https://hostell.onrender.com");

const InboxDisplay = () => {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [msgData, setMsgData] = useState({});

  // Rename this to message after connecting to the server
  // const incomingMessage = () => {
  //   socket.on("connect", () => {
  //     console.log(socket.connected); // true
  //   });

  //   socket.on("disconnect", () => {
  //     console.log(socket.connected); // false
  //   });
  // }

  useEffect(() => {
    const base64Images = files.map((file) => file.base64);
    setImages(base64Images);
  }, [files]);

  const removeItem = (index) => {
    setFiles((prevMediaList) => {
      // Create a new array without the item at the specified index
      const updatedMediaList = [
        ...prevMediaList.slice(0, index),
        ...prevMediaList.slice(index + 1),
      ];
      // console.log(updatedMediaList)
      return updatedMediaList;
    });
  };

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
    <section className="relative h-screen">
      <Return />
      <div className="flex flex-col items-center justify-center border-b-2 border-gray-300 p-2">
        <div className="h-24 w-24 bg-primary2 rounded-full">
          <Image
            src={userImg}
            alt="profile pic"
            className="object-cover w-full h-full overflow-hidden"
            priority={true}
          />
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
      <div>
        <div>
          {files.length > 0 && (
            <div className="flex gap-3 overflow-scroll py-4">
              {files.map((file, i) => {
                return (
                  <div key={i} className="relative">
                    <button
                      className="absolute -top-3 -right-2 p-1 rounded-full bg-red-500 text-white"
                      onClick={() => removeItem(i)}
                    >
                      <HiX />
                    </button>

                    <img
                      className="min-w-[150px] h-[150px] rounded-lg object-cover"
                      src={file.base64}
                      onChange={() => setImages(file.base64)}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <div
          className={`grid grid-cols-[1fr_8fr_1fr] absolute bottom-0 left-0 right-0 bg-white shadow-lg w-full px-2 py-2 items-center gap-2 border-t border-t-gray-300`}
        >
          <div className="flex items-center justify-center text-primary2 cursor-pointer">
            <HiPhoto className="cursor-pointer" />
            <FileBase64 multiple={true} onDone={(f) => setFiles(f)} />
          </div>
          <input
            type="text"
            className="bg-transparent focus:outline-none w-full p-2 border border-gray-300 rounded-full"
            placeholder="message..."
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="p-3 flex items-center justify-center bg-gray-50 border border-gray-300 rounded-full text-primary2">
            <HiPaperAirplane size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InboxDisplay;
