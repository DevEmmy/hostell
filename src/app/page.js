"use client";
import { useLayoutEffect } from "react";
import Recommended from "@/HostelComponents/Recommended";
import Nav from "@/NavConponents/Nav";
import SearchInput from "@/NavConponents/SearchInput";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  useLayoutEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      router.replace("/login");
    }
  }, []);

  return (
    <div>
      <Nav />
      <SearchInput />
      <Recommended />
    </div>
  );
};

export default page;
