import React from "react";
import {
  FilterCard,
  NearbyHostel,
  NotificationCard,
  RecommendedHostel,
  SearchLocationInput,
} from "../components";
import { useStateContext } from "../contexts/ContextProvider";

function HostelDashboard() {
  const { showNotification, showFilter } = useStateContext();
  return (
    <>
      <div className="mx-3 scroll-smooth">
        {
          showNotification && (
            <div className="fixed z-10 w-full h-fit bg-secondary1">
            <NotificationCard/>
          </div>
          )
        }
       
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
