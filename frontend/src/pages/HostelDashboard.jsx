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
          <RecommendedHostel simplified />
        </div>
        <div>
          <NearbyHostel simplified />
        </div>
      </div>
    </>
  );
}

export default HostelDashboard;
