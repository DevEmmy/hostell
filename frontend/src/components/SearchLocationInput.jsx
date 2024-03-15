import React from "react";
import { FiSearch } from "react-icons/fi";
import { RiEqualizerLine } from "react-icons/ri";
import ButtonIcon from "./ButtonIcon";

const SearchLocationInput = () => {
  return (
    <form className="flex items-center gap-3 bg-gray-100 p-3 rounded-full">
      <label id="searchLocation" className="hidden">
        Search Location
      </label>
      <FiSearch />
      <input
        className="bg-transparent flex-1 border-r-2 outline-none focus:outline-none"
        type="text"
        name="searchLocation"
        placeholder="Search Location..."
      />
      <ButtonIcon icon={<RiEqualizerLine />} />
    </form>
  );
};

export default SearchLocationInput;
