'use client'
import { createContext, useContext, useState } from "react";

export const StateContext = createContext()

export const ContextProvider =({children}) => {
    const [searchInput, setSearchInput] = useState('')
    const [priceFilter, setPriceFilter] = useState([])
    const [showFilter, setShowFilter] = useState(false);
    const [bookmark, setBookmark] = useState(false)
    

    return (
        <StateContext.Provider
        value={{
            searchInput, 
            setSearchInput,
            priceFilter,
            setPriceFilter,
            showFilter,
            setShowFilter,
            bookmark,
            setBookmark
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)