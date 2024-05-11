"use client";
import React, { useState, useEffect } from "react";
import { useGetHostelDetails } from "@/store/hosteldetails";
import { useStateContext } from "@/Contexts/ContextProvider";

const BookmarkHostel = () => {
  const { bookmarkDetails, setBookmarkDetails } = useStateContext();
  const savedBookmarkArray = JSON.parse(localStorage.getItem("savedBookmark"));
  // const [bookmarkDetails, setBookmarkDetails] = useState([])

//   const fetchBookmarked = () => {
//         for(const id of savedBookmarkArray) {
//                   const { hostelDetails } =  useGetHostelDetails(id);
//                 //   console.log(hostelDetails)
//                   setBookmarkDetails(hostelDetails)
//         }
//   }

//   fetchBookmarked()



  console.log(bookmarkDetails);

  return <div>BookmarkHostel</div>;
};

export default BookmarkHostel;
