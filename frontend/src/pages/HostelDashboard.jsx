import React from "react";
import {
  NearbyHostel,
  RecommendedHostel,
  SearchLocationInput,
} from "../components";

function HostelDashboard() {
  return (
    <>
      <div className="mx-3 scroll-smooth">
        <div>
          <SearchLocationInput />
        </div>
        <div>
          <RecommendedHostel />
        </div>
        <div>
          <NearbyHostel />
        </div>
      </div>
    </>
  );
}

export default HostelDashboard;
