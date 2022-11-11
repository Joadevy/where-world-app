import type { FC } from "react";
import type { Country as country } from "../Hooks/UseCountries";

import { Link } from "react-router-dom";

type props = {
  country: country;
};

export const Country: FC<props> = ({ country }) => {
  return (
    <Link
      className="flex flex-col rounded-md bg-slate-50 dark:bg-d-blue-dark drop-shadow-2xl"
      to={`/country/${country.name}`}
    >
      <img
        alt=""
        className="w-full max-h-40 rounded-t-md"
        loading="lazy"
        src={country.imgUrl}
      />
      <div className="p-6 mb-4 flex flex-col gap-1">
        <h2 className="text-lg font-semibold mb-2">{country.name}</h2>
        <p>
          Population: <span className="font-light">{country.population}</span>
        </p>
        <p>
          Region: <span className="font-light">{country.region}</span>
        </p>
        <p>
          Capital: <span className="font-light">{country.capital}</span>
        </p>
      </div>
    </Link>
  );
};
