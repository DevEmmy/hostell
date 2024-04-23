"use client";
import Recommended from "@/HostelComponents/Recommended";
import Nav from "@/NavConponents/Nav";
import SearchInput from "@/NavConponents/SearchInput";

const page = () => {

  return (
    <div>
      <Nav />
      <SearchInput />
      <Recommended />
    </div>
  );
};

export default page;
