import React from "react";
import hostel1 from "/hostel1.jpg";
import hostel2 from "/hostel2.jpg";
import HostelCard from "./HostelCard";
import SearchLocationInput from "./SearchLocationInput";

const NearbyHostel = () => {
  return (
    <section className="m-3">
      {/* <div>
        <SearchLocationInput />
      </div> */}
      <div className="flex items-center justify-between p-2 my-4">
        <h2 className="font-bold">Nearby Hostel</h2>
        <a className="text-primary2 text-sm capitalize" href="#!">
          See All
        </a>
        {/* <Link to="/">See All</Link> */}
      </div>
      <div className="flex flex-col flex-wrap items-center justify-between md:flex-row gap-2">
        <HostelCard
          price="₦ 120,000.00"
          location="accord,zoo,funaab"
          image={hostel1}
        />
        <HostelCard
          price="₦ 140,000.00"
          location="accord,zoo,funaab"
          image={hostel2}
        />
        <HostelCard
          price="₦ 120,000.00"
          location="accord,zoo,funaab"
          image={hostel1}
        />
        <HostelCard
          price="₦ 140,000.00"
          location="accord,zoo,funaab"
          image={hostel2}
        />
        <HostelCard
          price="₦ 120,000.00"
          location="accord,zoo,funaab"
          image={hostel1}
        />
        <HostelCard
          price="₦ 140,000.00"
          location="accord,zoo,funaab"
          image={hostel2}
        />
        <HostelCard
          price="₦ 120,000.00"
          location="accord,zoo,funaab"
          image={hostel1}
        />
        <HostelCard
          price="₦ 140,000.00"
          location="accord,zoo,funaab"
          image={hostel2}
        />
      </div>
    </section>
  );
};

export default NearbyHostel;
