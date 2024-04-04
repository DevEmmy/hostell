import Recommended from "@/HostelComponents/Recommended";
import Nav from "@/NavConponents/Nav";
import SearchInput from "@/NavConponents/SearchInput";
import React from "react";

const page = () => {
  return (
    <>
      <Nav />
      <SearchInput/>
      <Recommended simplified />
    </>
  );
};

export default page;
