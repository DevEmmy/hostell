import React, { useEffect, useState } from "react";
import HostelCard from "./HostelCard";
import { Link } from "react-router-dom";
import { popularHostel } from "../../request";
import { Loader } from "../components";
import {SearchLocationInput, FilterCard} from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const PopularHostel = ({ simplified }) => {
  const { searchLocation, priceFilter, showFilter } = useStateContext();
  const [hostelArray, setHostelArray] = useState([]);
  const [filteredHostels, setFilteredHostels] = useState([]);
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


  useEffect(() => {
    filterHostels();
  }, [searchLocation, hostelArray, priceFilter]); // Include priceFilter in the dependency array

  const filterHostels = () => {
    let filteredHostels = hostelArray;

    // Filter based on location
    const searchTerm = searchLocation.trim().toLowerCase();
    if (searchTerm !== "") {
      filteredHostels = filteredHostels.filter((hostel) =>
        hostel.location.toLowerCase().includes(searchTerm)
      );
    }

    // Filter based on price
    for (const priceRange in priceFilter) {
      filteredHostels = filteredHostels.filter((hostel) =>
        isPriceInRange(hostel.price, priceRange)
      );
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

  return (
    <section className="m-3 w-screen">
       {!simplified &&  <div>
          <SearchLocationInput />
        </div>}
        {showFilter && (
          <div>
            <FilterCard />
          </div>
        )}
      <div className="flex items-center justify-between p-2 my-4">
        <h2 className="font-bold">Popular Hostel</h2>

        {simplified && (
          <Link
            className="text-primary2 text-sm capitalize"
            to="/hostel/popular"
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
          {filteredHostels.length > 0 ? (
                filteredHostels.map((hostel, index) => (
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
