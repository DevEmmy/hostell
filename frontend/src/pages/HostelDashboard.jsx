import React from "react";
import {
  FilterCard,
  NearbyHostel,
  RecommendedHostel,
  SearchLocationInput,
} from "../components";
import { useStateContext } from "../contexts/ContextProvider";

function HostelDashboard() {
  const { showFilter } = useStateContext();
  return (
    <>
      <div className="mx-3 scroll-smooth">     
        <div>
          <SearchLocationInput />
        </div>
        {
          showFilter && (
        <div>
          <FilterCard/>
        </div>
          )
        }
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
