import React, { useEffect, useState } from "react";
import HostelCard from "./HostelCard";
import { Link } from "react-router-dom";
import { recommendedHostel } from "../../request";
import { Loader } from "../components";

const RecommendedHostel = ({ simplified }) => {
  const [hostelArray, setHostelArray] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await recommendedHostel();
        const hostelResult = result.payload;
        // console.log(hostelResult)
        setHostelArray(hostelResult);
        // console.log(hostelResult);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // const simplifiedStyles = "flex flex-row gap-3";
  // const normalStyles =
  //   "flex flex-col gap-3 md:grid md:grid-cols-3 lg:grid-cols-4";
  
  return (
    <section className="m-3 w-screen p-3 mx-auto">
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
       {hostelArray.length > 0 ? hostelArray.map((hostel, index) => (
          <HostelCard
            key={index}
            hostelid={hostel._id}
            price={hostel.price}
            location={hostel.location}
            image={hostel.images.length > 0 ? hostel.images[0] : ""}
          />
        )) : (
          <div className="flex items-center justify-center">
            <Loader/>
          </div>
        )} 
        </div>
      </div>
    </section>
  );
};

export default RecommendedHostel;
