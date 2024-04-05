import Link from "next/link";
import React from "react";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import EachMessageDisplay from "./EachMessageDisplay";

const MessagesDisplay = () => {
  return (
    <section>
      <h2 className="text-center text-2xl font-medium flex items-center justify-center gap-2 bg-primary2 p-3 text-white">
        <BiSolidMessageSquareEdit size={35} /> Messages
      </h2>
      <div>
      {
      [0,1,2,3,4,5].map((message, i) => (
        <Link key={i} href={`/messages/${i}`}>
          <EachMessageDisplay/>
        </Link>
      ))
      } 
      </div>
    </section>
  );
};

export default MessagesDisplay;
