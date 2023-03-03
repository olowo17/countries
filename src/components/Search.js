import React, { useRef, useEffect, useState } from "react";
import { useCountry } from "../utilities/useCountry";
import CountryDetails from "./CountryDetails";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [selectOption, setSelectOption] = useState("all");
  const [searchData, setSearchData] = useState([]);
  // const [regionState, setRegionState] = useState("africa");

  const { data } = useCountry();

  const handleSelectOption = (e) => {
    e.preventDefault();
    setSelectOption(e.target.value);
  };
  console.log(selectOption);
  useEffect(() => {
    selectOption === "all"
      ? navigate("/")
      : navigate(`/region/${selectOption}`);
  }, [selectOption]);

  const handleChangeInput = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    setSearchData(
      data.filter((x) =>
        x?.name?.common
          ?.toLowerCase()
          ?.includes(e?.target?.value?.toLowerCase())
      )
    );
    // props.onSubmit(searchInput);
  };

  return (
    <div className="bg-sky-500">
      <div className="flex justify-between p-4">
        <form className="search ">
          <input
            autoFocus
            type="text"
            placeholder="search for country"
            value={searchInput}
            onChange={handleChangeInput}
            className="text-black p-1 text-center"
          />
          <button
            onClick={() => navigate(`/details/${searchInput}`)}
            className="text-white bg-lime-500 rounded-md p-1 ml-1"
          >
            search
          </button>
        </form>
        <div className="">
          <select
            placeholder="Select Options"
            className="h-[40px] px-2"
            onChange={handleSelectOption}
            value={selectOption}
          >
            <option className="p-2" value="all">
              All
            </option>
            <option className="p-2" value="ame">
              America
            </option>
            <option className="p-2" value="asia">
              Asia
            </option>
            <option className="p-2" value="africa">
              Africa
            </option>
            <option className="p-2" value="europe">
              Europe
            </option>
            <option className="p-2" value="oceania">
              Oceania
            </option>
          </select>
        </div>
      </div>
      {searchInput.length !== 0 && (
        <>
          <h1 className="text-3xl text-center text-red-500">Search Result</h1>
          <div className=" justify-center p-6 text-center m-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-16 ">
              {searchData?.map((country, index) => (
                <div
                  className="bg-gray-700  max-w-sm rounded overflow-hidden shadow-lg hover:cursor-pointer"
                  key={index}
                >
                  <CountryDetails country={country} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
