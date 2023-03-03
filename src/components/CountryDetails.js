import React from "react";

const CountryDetails = ({ country, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-full rounded overflow-hidden shadow-lg "
    >
      <img
        src={country.flags?.png}
        alt={country.flags?.alt}
        className="h-[150px] w-[100%]"
      />
      <div className="country_details text-center p-2 space-y-2 pb-2 text-white bg-sky-700 h-[150px] w-[100%]">
        <h2 className="country_name text-xl">{country.name.common}</h2>
        <p>Continent: {country.region}</p>
        <p> Population: {country.population}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
};

export default CountryDetails;
