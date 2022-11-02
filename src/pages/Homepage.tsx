import type { FC } from "react";

import { Link } from "react-router-dom";

import { useCountries } from "../Hooks/UseCountries";

const Homepage: FC = () => {
  // Fetch the info here :)
  const { status, countries } = useCountries("./data.json");
  // const { status, countries } = useCountries(
  //   "https://restcountries.com/v3.1/all"
  // );

  if (!status) return <div>Loading...</div>;

  return (
    <div>
      {countries.map((country, index) => (
        <Link key={index} to={`/country/${country.name}`}>
          <p>{country.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Homepage;
