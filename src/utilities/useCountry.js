import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const useCountry = () => {
  //   const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const { data, isError, isLoading } = useQuery(["country"], () => {
    return Axios.get("https://restcountries.com/v3.1/all").then(
      (res) => res.data
    );
  });

  if (isLoading) {
    return <h1 className="text-white text-4xl">Is Loading.....</h1>;
  }

  const toggleModeHandler = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };

  return { data, isError, toggleModeHandler, darkMode };
};
