import React from "react";
import {
  Navbar,
  SearchLocationInput,
  RecommendedHostel,
  NearbyHostel,
} from "../components";

const HostelLayout = () => {
  return (
    <main className="m-4">
      <div>
        <Navbar />
      </div>
      <div>
        <SearchLocationInput />
      </div>
      <div>
        <RecommendedHostel />
      </div>
      <div>
        <NearbyHostel />
      </div>
    </main>
  );
};

export default HostelLayout;
