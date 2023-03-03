import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CountryInfo from "./CountryInfo";

const Regions = () => {
  const [regionData, setRegionData] = useState();
  // const navigate = useNavigate();
  const { regionname } = useParams();
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/region/${regionname}`)
      .then((res) => res.json())
      .then((data) => setRegionData(data))
      .catch((err) => console.log("Error:", err.message));
  }, [regionname]);

  console.log(regionname);

  console.log(regionData);
  return (
    <div className=" p-6">
      <article className="text-center text-3xl text-white mb-3">
        {regionname.toUpperCase()}
      </article>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-16">
        {regionData?.map((country, index) => (
          <CountryInfo country={country} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Regions;
