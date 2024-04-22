"use client";
import React, { useEffect, useState } from "react";
import HostelCard from "./HostelCard";
import Link from "next/link";
import { popularHostel } from "@/request/request";
import Loader from "@/BasicComponents/Loader";
// import {SearchLocationInput, FilterCard} from "../components";
import { useStateContext } from "@/Contexts/ContextProvider";

const PopularHostel = ({ simplified }) => {
  const { searchInput, priceFilter } = useStateContext();
  const [hostelArray, setHostelArray] = useState([]);
  const [filteredHostels, setFilteredHostels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await popularHostel();
        const hostelResult = result.payload;
        // console.log(hostelResult);
        // const sortedHostelArray = hostelResult.reverse();
        setHostelArray(sortedHostelArray);
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
    let filteredHostels = [...hostelArray];
    const searchTerm = searchInput.trim().toLowerCase();
  
    if (searchTerm === '' || priceFilter == []) {
      setFilteredHostels(hostelArray);
      return;
    }
  
    filteredHostels = filteredHostels.filter((hostel) =>
      hostel.location.toLowerCase().includes(searchTerm)
    );
  
    for (const priceRange in priceFilter) {
      if (priceFilter[priceRange]) {
        filteredHostels = filteredHostels.filter((hostel) =>
          isPriceInRange(hostel.price, priceRange)
        );
      }
    }
  
    setFilteredHostels(filteredHostels);
  };

  //   // Function to check if a price is within a given range
    const isPriceInRange = (price, range) => {
      const [min, max] = range
        .split(" - ")
        .map((value) => parseInt(value.replace(/\D/g, "")));
      return price >= min && price <= max;
    };

  return (
    <section className="m-3 w-screen">
      {/* {!simplified &&  <div>
          <SearchLocationInput />
        </div>}
        {showFilter && (
          <div>
            <FilterCard />
          </div>
        )} */}
      <div className="flex items-center justify-between p-2 my-4">
        <h2 className="font-bold">Popular Hostel</h2>

        {/* {simplified && (
          <Link
            className="text-primary2 text-sm capitalize"
            to="/hostel/popular"
          >
            See All
          </Link>
        )} */}
      </div>
      <div className="flex flex-col md:flex-row gap-2 flex-wrap">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-2 flex-wrap">
            {filteredHostels.length > 0 ? (
              filteredHostels.map((hostel, index) => (
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
    </section>
  );
};

export default PopularHostel;
