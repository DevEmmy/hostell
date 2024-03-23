import React, { useEffect } from "react";
import hostel1 from "/hostel1.jpg";
import hostel2 from "/hostel2.jpg";
import HostelCard from "./HostelCard";
import SearchLocationInput from "./SearchLocationInput";
import { Link } from "react-router-dom";
import { recommendedHostel } from "../../request";

const RecommendedHostel = ({ simplified }) => {
  const fetchData = async () => {
    let result = await recommendedHostel();
    return result;
  };
  useEffect(() => {
    const recommendedHostelData = fetchData();
    // console.log(recommendedHostelData);
  }, []);

  const simplifiedStyles = "flex flex-row gap-3";
  const normalStyles =
    "flex flex-col gap-3 md:grid md:grid-cols-3 lg:grid-cols-4";
  return (
    <section className="m-3 w-screen p-3 mx-auto">
      {!simplified && (
        <div>
          <SearchLocationInput />
        </div>
      )}

      <div className="flex items-center justify-between p-2 my-4">
        <h2 className="font-bold">Recommended Hostel</h2>
        {simplified && (
          <Link className="text-primary2 text-sm capitalize" to="/hostel/popular">
            See All
          </Link>
        )}
      </div>

      <div className="cursor-grab">
        <div
          // className={simplified ? simplifiedStyles : normalStyles}
          className="flex flex-col flex-wrap md:flex-row gap-2"
        >     
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
          <HostelCard
            price="₦ 140,000.00"
            location="accord,zoo,funaab"
            image={hostel2}
          />
        </div>
      </div>
    </section>
  );
};

export default RecommendedHostel;
