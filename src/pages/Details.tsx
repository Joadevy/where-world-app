import { type FC } from "react";

import { Country } from "../Hooks/UseCountries";

type props = {
  country: Country;
  countries: Country[];
};

const Details: FC<props> = ({ country, countries }) => {
  return (
    <div>
      <h2>Country: {country.name}</h2>
    </div>
  );
};

export default Details;
