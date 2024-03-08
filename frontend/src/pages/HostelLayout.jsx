import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar, Sidebar } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const HostelLayout = () => {
  const { activeMenu } = useStateContext();

  return (
    <div className={activeMenu ? "fixed" : ""}>
      <div>
        <Navbar />
      </div>
      {activeMenu && (
        <div>
          <Sidebar />
        </div>
      )}
      <main>
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HostelLayout;
