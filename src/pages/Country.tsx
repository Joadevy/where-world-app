// import type { Country } from "../Hooks/UseCountries";

import { type FC, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useCountries } from "../Hooks/UseCountries";
import { getData as getCountry } from "../Utils/utils";

const Country: FC = () => {
  const id = useParams().id;

  // It shouldn't use the same hook as the Homepage, because the data will change according the id.
  const { status, countries: country } = useCountries(
    `https://restcountries.com/v3.1/name/${id}`
  );

  //   status == true ? console.log(country) : ""; //   function

  return <div>Country details!</div>;
};

export default Country;
