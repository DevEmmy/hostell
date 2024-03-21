import React from "react";
import hostel1 from "/hostel1.jpg";
import { IoCloseSharp } from "react-icons/io5";
import { useStateContext } from "../contexts/ContextProvider";

function NotificationCard() {
  const { setShowNotification } = useStateContext();
  return (
    <div>
      <button onClick={() => {
        setShowNotification(false)
      }}>
        <IoCloseSharp size={30} className="text-right absolute right-5 top-1"/>
      </button>
    <div className="flex flex-row items-center gap-3 bg-slate-200 p-2 rounded-md my-2">
      <img className="w-10 h-10 rounded-md" src={hostel1} alt="hostel" />
      <small className="font-medium">John Doe posted an hostel update</small>
    </div>
    <div className="flex flex-row items-center gap-3 bg-slate-200 p-2 rounded-md my-2">
      <img className="w-10 h-10 rounded-md" src={hostel1} alt="hostel" />
      <small className="font-medium">John Doe posted an hostel update</small>
    </div>
    <div className="flex flex-row items-center gap-3 bg-slate-200 p-2 rounded-md my-2">
      <img className="w-10 h-10 rounded-md" src={hostel1} alt="hostel" />
      <small className="font-medium">John Doe posted an hostel update</small>
    </div>
    <div className="flex flex-row items-center gap-3 bg-slate-200 p-2 rounded-md my-2">
      <img className="w-10 h-10 rounded-md" src={hostel1} alt="hostel" />
      <small className="font-medium">John Doe posted an hostel update</small>
    </div>
    <div className="flex flex-row items-center gap-3 bg-slate-200 p-2 rounded-md my-2">
      <img className="w-10 h-10 rounded-md" src={hostel1} alt="hostel" />
      <small className="font-medium">John Doe posted an hostel update</small>
    </div>
    </div>
  );
}

export default NotificationCard;
