import React, { useEffect, useState } from "react";
import HostelCard from "./HostelCard";
import { Link } from "react-router-dom";
import { popularHostel } from "../../request";
import { Loader } from "../components";

const PopularHostel = ({ simplified }) => {
  const [hostelArray, setHostelArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await popularHostel();
        const hostelResult = result.payload;
        const sortedHostelArray = hostelResult.reverse();
        setHostelArray(sortedHostelArray);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="m-3">
      <div className="flex items-center justify-between p-2 my-4">
        <h2 className="font-bold">Nearby Hostel</h2>

        {simplified && (
          <Link
            className="text-primary2 text-sm capitalize"
            to="/hostel/explore"
          >
            See All
          </Link>
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-2 flex-wrap">
        {isLoading ? (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-2 flex-wrap">
          {hostelArray.length > 0 ? (
            hostelArray.map((hostel, index) => (
              <HostelCard
                key={index}
                price={hostel.price}
                location={hostel.location}
                image={hostel.images.length > 0 ? hostel.images[0] : ""}
              />
            ))
          ) : (
            <p>No hostels available</p>
          )}
        </div>
      )}
      </div>
    </section>
  );
};

export default PopularHostel;
