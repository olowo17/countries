import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { BiArrowBack } from "react-icons";

const Country = () => {
  const [countryData, setCountryData] = useState();
  const navigate = useNavigate();
  const { countryname } = useParams();
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryname}`)
      .then((res) => res.json())
      .then((data) => setCountryData(data))
      .catch((err) => console.log("Error:", err.message));
  }, [countryname]);

  console.log(countryData);
  // countryData?.map((element) => {
  //   console.log(element);
  // console.log(element.languages);
  // });

  return (
    <div className="text-red-700 mt-[100px] ml-[100px]">
      <button
        className="bg-red-500 p-2 text-white"
        onClick={() => navigate("/")}
      >
        Back
      </button>
      {countryData?.map((x, i) => (
        <div className="flex" key={i}>
          <div className="flag">
            <img src={x?.flags.png} alt={x?.flags.alt} className="h-[200px]" />
          </div>
          <div className="country_profile  grid">
            <div className=" flex">
              <div className="country_profile_left ml-8 text-white">
                <p className="  text-xl">Native Name: {x?.name?.common}</p>
                <p className=""> Population:{x?.population}</p>

                <p className=""> Region:{x?.region}</p>
                <p className=""> Subregion:{x?.subregion}</p>
                <p className="">Capital:{x?.capital}</p>
                {/* <p className="text-red-700">{x?.borders}</p> */}
              </div>
              <div className="country_profile_rightt ml-4">
                <p className="text-white"> Top Level Domain:{x?.tld}</p>
                <p className="text-white">
                  {" "}
                  Currencies:
                  {x?.currencies[Object?.keys(x?.currencies)[0]]?.name}
                </p>
                <p className="text-white">
                  {/* Languages:{x?.languages?.cnr?.split(",")} */}
                  Language(s): {x?.languages[Object.keys(x?.languages)[0]]}
                </p>
              </div>
            </div>
            <div className="bordercountries space-x-2 px-1 flex justify-center align-center ">
              Border Country:
              {x?.borders?.map((b, i) => (
                <div
                  className="bg-green-500 rounded-sm text-white h-[40px] w-[40px] justify-center ml-4 text-center justify-items-center "
                  key={i}
                >
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Country;
