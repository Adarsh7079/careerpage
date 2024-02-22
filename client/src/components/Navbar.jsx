import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" text-2xl font-semibold mx-10 flex items-center p-4">
      careers@ <span className=" bg-blue-500 text-white text-2xl font-semibold px-2 mx-1 h-[30px]">tech</span>
    </div>
  );
};

export default Navbar;
