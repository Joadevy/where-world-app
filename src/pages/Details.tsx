import { type FC } from "react";
import { useParams } from "react-router-dom";

import { useCountries } from "../Hooks/UseCountries";

const Details: FC = () => {
  const id = useParams().id;

  // It shouldn't use the same hook as the Homepage, because the data will change according the id.
  const { status, countries: country } = useCountries(
    `https://restcountries.com/v3.1/name/${id}`
  );

  //   status == true ? console.log(country) : ""; //   function
  if (!status) return <div>Loading...</div>;
  console.log(country);

  return (
    <div>
      <h2>Country: {country[0].name}</h2>
    </div>
  );
};

export default Details;
