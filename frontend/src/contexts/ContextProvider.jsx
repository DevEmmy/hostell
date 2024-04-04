import { createContext, useContext, useState } from "react";

export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [searchLocation, setSearchLocation] = useState('')
  const [priceFilter, setPriceFilter] = useState([])

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        showNotification,
        setShowNotification,
        showFilter,
        setShowFilter,
        searchLocation,
        setSearchLocation,
        priceFilter,
        setPriceFilter
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
