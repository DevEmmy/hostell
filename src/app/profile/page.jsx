'use client'
import Nav from "@/NavConponents/Nav";
import Profile from "@/ProfileComponents/Profile";
import React, {useLayoutEffect} from "react";

const page = () => {

  useLayoutEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      router.replace("/login");
    }
  }, []);

  return (
    <>
      <Nav />
      <Profile />
    </>
  );
};

export default page;
