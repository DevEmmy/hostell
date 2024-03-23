import React, { useEffect, useState } from "react";
import HostelCard from "./HostelCard";
import { Link } from "react-router-dom";
import { popularHostel } from "../../request";

const PopularHostel = ({ simplified }) => {
  const [hostelArray, setHostelArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await popularHostel();
        const hostelResult = result.payload;
        setHostelArray(hostelResult);
        console.log(hostelResult);
      } catch (error) {
        console.log(error);
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
        {hostelArray.length > 0 ? hostelArray.map((hostel, index) => (
          <HostelCard
            key={index}
            hostelId={hostel.id}
            price={hostel.price}
            location={hostel.location}
            image={hostel.images.length > 0 ? hostel.images[0] : ""}
          />
        )) : 'No  hostel available'}
      </div>
    </section>
  );
};

export default PopularHostel;
