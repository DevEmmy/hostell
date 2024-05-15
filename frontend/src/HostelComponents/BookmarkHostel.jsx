"use client";
import React, { useState, useEffect } from "react";
import { useGetHostelDetails } from "@/store/hosteldetails";
import { useStateContext } from "@/Contexts/ContextProvider";

const BookmarkHostel = () => {
  const { bookmarkDetails, setBookmarkDetails } = useStateContext();
  const savedBookmarkArray = JSON.parse(localStorage.getItem("savedBookmark"));
  const [hostelID, setHostelID] = useState([])

//  console.log(savedBookmarkArray)

//  useEffect(() => {
//   for(let i = 0; i <= savedBookmarkArray.length; i++){
//     const { hostelDetails} = useGetHostelDetails(i)
//     console.log(hostelDetails)
//   }
//  }, [])

  // const fetchBookmarked = async() => {
    
  //       savedBookmarkArray.forEach( async (hostelid) => {
  //         const {hostelDetails} = useGetHostelDetails(hostelid)
  //         const result = await hostelDetails
  //         setBookmarkDetails((prev) => [...prev, result])
  //         console.log(bookmarkDetails)
  //       })
  // }

  // fetchBookmarked()

  
  
  // useEffect(() => {
  //   const fetchBookmarked = async () => {
  //     savedBookmarkArray.forEach(async (hostelid) => {
  //       try {
          // const { hostelDetails } =  useGetHostelDetails(hostelid);
          // setHostelID((prev) => [...prev, hostelDetails]);
  //       } catch (error) {
  //         console.error(`Error fetching hostel details for ID ${hostelid}:`, error);
  //       }
  //     });
  //   };
  //   fetchBookmarked();


  // }, []);



  // console.log(bookmarkDetails);

  return <div>BookmarkHostel</div>;
};

export default BookmarkHostel;
