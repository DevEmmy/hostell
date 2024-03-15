import React from "react";
import hostel1 from "/hostel1.jpg";

function NotificationCard() {
  return (
    <div className="flex flex-row items-center gap-3 bg-slate-200 p-2 rounded-md">
      <img className="w-10 h-10 rounded-md" src={hostel1} alt="hostel" />
      <small className="font-medium">John Doe posted an hostel update</small>
    </div>
  );
}

export default NotificationCard;
