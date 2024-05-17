'use client'
import React, { useEffect } from "react";
import HostelCard from "./HostelCard";

const BookmarkHostel = () => {
  
  const savedBookmarkArray = JSON.parse(localStorage.getItem("savedBookmark"));



  return <div>
    <h2 className="text-xl font-medium p-3 capitalize">Bookmarked hostel</h2>

    <div className="flex flex-col md:flex-row gap-4 flex-wrap p-5">
    {
      savedBookmarkArray?.length > 0 ? (
        savedBookmarkArray.map((hostel, index) => (
          <HostelCard
                      key={index}
                      price={hostel.price}
                      hostelid={hostel._id}
                      location={hostel.location}
                      title={hostel.title}
                      agentId={hostel.createdBy}
                      image={hostel.images.length > 0 ? hostel.images[0] : ""}
                    />
        ))
      ) : 'No bookmark hostel found'
    }
      </div>
  </div>;
};

export default BookmarkHostel;
