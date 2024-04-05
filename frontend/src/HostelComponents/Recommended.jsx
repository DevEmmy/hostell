"use client";
import React, { useEffect, useState } from "react";
import HostelCard from "./HostelCard";
import Link from "next/link";
import { recommendedHostel } from "@/request/request";
import Loader from "@/BasicComponents/Loader";
import { useStateContext } from "@/Contexts/ContextProvider";
// import { SearchLocationInput, FilterCard } from "../components";

const Recommended = ({ simplified }) => {
  const { searchInput, priceFilter } = useStateContext();
  const [hostelArray, setHostelArray] = useState([]);
  const [filteredHostels, setFilteredHostels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await recommendedHostel();
        const hostelResult = await result.payload;
        console.log(hostelResult)
        // const sortedHostelArray = await hostelResult.reverse();
        // console.log(hostelArray)
        setHostelArray(hostelResult);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    filterHostels();
  }, [searchInput, hostelArray, priceFilter]);

  const filterHostels = () => {
    let filterHostels = hostelArray;

    // Filter based on location
    const searchTerm = searchInput.trim().toLowerCase();
    if (searchTerm !== "") {
      filterHostels = filterHostels.filter((hostel) =>
        hostel.location.toLowerCase().includes(searchTerm)
      );
    }

    if(priceFilter.length === 0){
      setFilteredHostels(hostelArray)
    }

    // Filter based on price
    for (const priceRange in priceFilter) {
      if (priceFilter[priceRange]) {
        filterHostels = filterHostels.filter((hostel) =>
          isPriceInRange(hostel.price, priceRange)
        );
      }
    }

    setFilteredHostels(filteredHostels);
  };

  // Function to check if a price is within a given range
  const isPriceInRange = (price, range) => {
    const [min, max] = range
      .split(" - ")
      .map((value) => parseInt(value.replace(/\D/g, "")));
    return price >= min && price <= max;
  };

  // const simplifiedStyles = "flex flex-row gap-3";
  // const normalStyles =
  //   "flex flex-col gap-3 md:grid md:grid-cols-3 lg:grid-cols-4";

  return (
    <section className="m-3 w-screen p-3 mx-auto">
      {/* {!simplified && (
        <div>
          <SearchLocationInput />
        </div>
      )}
      {!simplified && showFilter && (
        <div>
          <FilterCard />
        </div>
      )} */}
      <div className="flex items-center justify-between p-2 my-4">
        <h2 className="font-bold">Recommended Hostel</h2>
        {/* {simplified && (
          <Link
            className="text-primary2 text-sm capitalize"
            href="/hostel/explore"
          >
            See All
          </Link>
        )} */}
      </div>

      <div className="cursor-grab">
        <div
          // className={simplified ? simplifiedStyles : normalStyles}
          className="flex flex-col flex-wrap md:flex-row gap-2"
        >
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
                    hostelid={hostel._id}
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
      </div>
    </section>
  );
};

export default Recommended;
