import type { FC } from "react";
import type { Country as country } from "../Hooks/UseCountries";

import { Link } from "react-router-dom";

type props = {
  country: country;
};

export const Country: FC<props> = ({ country }) => {
  return (
    <Link
      className="flex border border-green-100 px-1 rounded-md"
      to={`/country/${country.name}`}
    >
      <p>{country.name}</p>
    </Link>
  );
};
