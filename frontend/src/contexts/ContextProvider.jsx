import { createContext, useContext, useState } from "react";

export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        showNotification,
        setShowNotification
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
