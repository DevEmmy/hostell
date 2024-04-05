import PopularHostel from "@/HostelComponents/Popular";
import Nav from "@/NavConponents/Nav";
import SearchInput from "@/NavConponents/SearchInput";
import React from "react";

const page = () => {
  return (
    <div>
      <Nav />
      <SearchInput/>
      <PopularHostel />
    </div>
  );
};

export default page;
