import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const HostelLayout = () => {
  const { activeMenu, setShowNotification } = useStateContext();

  return (
    <div className={`${activeMenu ? "fixed" : ""} flex flex-col justify-between`}>
      <div>
        <Navbar setShowNotification={setShowNotification} />
      </div>
      {activeMenu && (
        <div>
          <Sidebar />
        </div>
      )}
      <main className="flex-1">
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HostelLayout;
