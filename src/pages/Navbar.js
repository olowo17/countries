import React from "react";
// import { FaMoon } from "react-icons/fa";
import Search from "../components/Search";

const Navbar = () => {
  return (
    <>
      {/* <div className="flex justify-between  py-4 bg-gradient-to-r from-pink-500 via-purple-500  to-indigo-500  p-6 ">
        <h1 className="text-3xl text-green-500 font-bold">
          Where in the world
        </h1>
        <button
          className="text-yellow-300 text-xl flex text-center space-x-2"
          onClick={toggleModeHandler}
        >
          <span>Dark mode</span>
          <FaMoon />
        </button>
      </div> */}
      <Search />
    </>
  );
};

export default Navbar;
