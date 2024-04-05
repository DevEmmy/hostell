import React from "react";
import userImg from "../../public/user.png";
import Image from "next/image";

const EachMessageDisplay = () => {
  return (
    <div className="flex items-center gap-2 p-3 my-2">
      <div className="h-14 w-14 bg-primary2 rounded-full">
        <Image
          src={userImg}
          alt="user"
          className="object-cover w-full h-full overflow-hidden"
          priority={true}
        />
      </div>
      <div className="flex flex-col flex-1">
        <h3 className="font-medium capitalize">John doe</h3>
        <small>Hii</small>
      </div>
      <div>
        <small className="italic text-gray-500">1min ago</small>
      </div>
    </div>
  );
};

export default EachMessageDisplay;
