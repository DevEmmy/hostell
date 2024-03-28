import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar, Sidebar, NotificationCard } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const HostelLayout = () => {
  const { activeMenu, showNotification, setShowNotification } =
    useStateContext();

  return (
    <div
      className={`${activeMenu ? "fixed" : ""} flex flex-col justify-between`}
    >
      <div>
        <Navbar setShowNotification={setShowNotification} />
      </div>
      {showNotification && (
        <div className="fixed top-12 z-10 w-full h-fit bg-white shadow-xl p-2">
          <NotificationCard />
        </div>
      )}
      {activeMenu && (
        <div>
          <Sidebar />
        </div>
      )}
      <main className="flex-1">
        <Outlet />
      </main>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
};

export default HostelLayout;
