import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import CountryInfo from "./CountryInfo";
// import Search from "../components/Search";
import { useCountry } from "../utilities/useCountry";
import "./Countries.css";

const Countries = () => {
  const { toggleModeHandler, darkMode } = useCountry();
  console.log(darkMode);

  let toggle = darkMode ? "dark" : "white";
  let mode = !darkMode ? " switch to Darkmode" : " switch to Lightmode";
  let icon = darkMode ? <FaSun /> : <FaMoon />;
  // const [lenght, setlength] = useState(0);
  // const getData = (searchData) => {
  //   setlength(searchData.length + 1);

  // };

  const { data } = useCountry();
  return (
    <div className={`${toggle}`}>
      <div className="flex justify-between  py-4 bg-gradient-to-r from-pink-500 via-purple-500  to-indigo-500  p-6 ">
        <h1 className="text-3xl text-green-500 font-bold">
          Where in the world
        </h1>
        <button
          className="text-yellow-300 text-xl flex text-center space-x-2"
          onClick={toggleModeHandler}
        >
          <span>{mode}</span>
          {icon}
        </button>
      </div>

      {/* state lifting */}
      {/* <Search onSubmit={getData} /> */}
      <div>
        <article className="text-center text-3xl text-white mb-3">
          All Countries
        </article>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-16 m-4">
          {data?.map((country, index) => (
            <CountryInfo country={country} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
