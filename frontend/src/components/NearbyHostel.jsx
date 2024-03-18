import React, {useEffect} from "react";
import hostel1 from "/hostel1.jpg";
import hostel2 from "/hostel2.jpg";
import HostelCard from "./HostelCard";
import SearchLocationInput from "./SearchLocationInput";
import { Link } from "react-router-dom";
import { popularHostel } from "../../request";

const NearbyHostel = ({ simplified }) => {
  const fetchData = async() => {
    const result = await popularHostel()
    return result
  }
  useEffect(() => {
    const popularHostelData = fetchData();
    // console.log(popularHostelData);
  }, [])
  return (
    <section className="m-3">
      {!simplified && (
        <div>
          <SearchLocationInput />
        </div>
      )}

      <div className="flex items-center justify-between p-2 my-4">
        <h2 className="font-bold">Nearby Hostel</h2>

        {simplified && (
          <Link className="text-primary2 text-sm capitalize" to="/explore">
            See All
          </Link>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-2 flex-wrap">
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
        <HostelCard
          price="₦ 140,000.00"
          location="accord,zoo,funaab"
          image={hostel2}
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
