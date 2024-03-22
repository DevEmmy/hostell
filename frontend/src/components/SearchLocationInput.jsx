import React, { useState} from "react";
import { FiSearch } from "react-icons/fi";
import { RiEqualizerLine } from "react-icons/ri";
import { useStateContext } from "../contexts/ContextProvider";

const SearchLocationInput = () => {
  const { showFilter, setShowFilter } = useStateContext();
  const [searchLocation, setSearchLocation] = useState('')

  const handleFilter = () => {
    setShowFilter((prev) => !prev)
  }
  return (
    <div className="flex items-center gap-3 bg-gray-100 p-3 rounded-full shadow">
      <label id="searchLocation" className="hidden">
        Search Location
      </label>
      <FiSearch />
      <input
        className="bg-transparent flex-1 border-r-2 outline-none focus:outline-none"
        type="text"
        name="searchLocation"
        placeholder="Search Location..."
        value={searchLocation}
        onChange={(e) => setSearchLocation(e.target.value)}
      />
      <button onClick={() => handleFilter()} className={`p-2 ${showFilter ? 'bg-slate-200 rounded-full' : ''}`}><RiEqualizerLine /></button>
    </div>
  );
};

export default SearchLocationInput;
