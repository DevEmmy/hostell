"use client";
import React, { useState, useEffect } from "react";
import { getHostelDetails } from "@/store/hosteldetails";
import { useStateContext } from "@/Contexts/ContextProvider";

const BookmarkHostel = () => {
  const { bookmarkDetails, setBookmarkDetails } = useStateContext();
  const savedBookmarkArray = JSON.parse(localStorage.getItem("savedBookmark"));
  // const [bookmarkDetails, setBookmarkDetails] = useState([])

  const fetchBookmarked = async() => {
        // for(const id of savedBookmarkArray) {
        //           const { hostelDetails } =  getHostelDetails(id);
        //           const result = await hostelDetails 
        //         //   console.log(hostelDetails)
        //           setBookmarkDetails(result)
        // }
        // forEach(hostelid => savedBookmarkArray){
        //   const {hostelDetails} = getHostelDetails(id)
        //   const result = await hostelDetails
        //   console.log(result)

        // }
        savedBookmarkArray.forEach( async (hostelid) => {
          const {hostelDetails} = getHostelDetails(hostelid)
          const result = await hostelDetails
          console.log(result)
        })
  }

  fetchBookmarked()



  console.log(bookmarkDetails);

  return <div>BookmarkHostel</div>;
};

export default BookmarkHostel;
