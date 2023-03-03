import React from "react";
import CountryDetails from "../components/CountryDetails";
import { useNavigate, useParams } from "react-router-dom";

const CountryInfo = ({ country }) => {
  const navigate = useNavigate();
  let { countryname } = useParams();
  const onSelect = () => {
    countryname = country.name.common;

    // console.log(countryname);
    navigate(`/details/${countryname}`);
  };
  return (
    <div className="   hover:cursor-pointer ">
      <CountryDetails country={country} onClick={onSelect} />
    </div>
  );
};

export default CountryInfo;
