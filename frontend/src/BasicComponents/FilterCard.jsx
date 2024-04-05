import React from "react";
import { useStateContext } from "@/Contexts/ContextProvider";

const FilterCard = () => {
  const { setPriceFilter, setSearchInput } = useStateContext();

  const handlePriceFilter = (e) => {
    const price = e.target.name;
    let updatedPriceFilter = {};

     // Toggle the price range
  if (updatedPriceFilter[price]) {
    // If the price range is already in the filter, remove it
    delete updatedPriceFilter[price];
  } else {
    // If the price range is not in the filter, add it
    updatedPriceFilter[price] = true;
  }

    setPriceFilter(updatedPriceFilter);
  };

  const handleLocationFilter = (e) => {
    const location = e.target.value;
    setSearchInput(location);
  };
  return (
    <div>
      <div className="p-5 shadow-lg m-3">
        <h3 className="capitalize font-semibold text-lg">filter by</h3>
        <div>
          <p className="font-medium text-lg italic capitalize">price</p>
          <div>
            <div className="flex items-center gap-2">
              <input
                className="m-1"
                type="checkbox"
                name="100000 - 149000"
                id="100000 - 149000"
                onChange={handlePriceFilter}
              />
              <label htmlFor="lower price">₦ 100,000 - ₦ 149,000</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="m-1"
                type="checkbox"
                name="150000 - 199000"
                id="150000 - 199000"
                onChange={handlePriceFilter}
              />
              <label htmlFor="lower price">₦ 150,000 - ₦ 199,000</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="m-1"
                type="checkbox"
                name="200000 - 249000"
                id="200000 - 249000"
                onChange={handlePriceFilter}
              />
              <label htmlFor="lower price">₦ 200,000 - ₦ 249,000</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="m-1"
                type="checkbox"
                name="250000 - 300000"
                id="250000 - 300000"
                onChange={handlePriceFilter}
              />
              <label htmlFor="lower price">₦ 250,000 - ₦ 300,000</label>
            </div>
          </div>
        </div>
        <div className="my-2">
          <p className="font-medium text-lg italic capitalize">location</p>
          <select className="p-2 my-2" onChange={handleLocationFilter}>
            <option value=""></option>
            <option value="Harmony">Harmony</option>
            <option value="Accord">Accord</option>
            <option value="Labuta">Labuta</option>
            <option value="Zoo">Zoo</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
