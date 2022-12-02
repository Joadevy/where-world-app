import type { FC } from "react";
import type { Country as country } from "../Hooks/UseCountries";

import { Link } from "react-router-dom";

type props = {
  country: country;
};

export const Country: FC<props> = ({ country }) => {
  return (
    <Link
      className="flex flex-col rounded-md bg-slate-50 dark:bg-d-blue-dark drop-shadow-2x overflow-hidden hover:translate-y-3 hover:scale-y-95 hover:scale-105 transition-all"
      to={`/country/${country.name}`}
    >
      <img
        alt=""
        className="w-full max-h-40 rounded-t-md"
        src={country.imgUrl}
      />
      <div className="p-6 mb-4 flex flex-col gap-1">
        <h2 className="text-lg font-semibold mb-2">{country.name}</h2>
        <p className="font-semibold">
          Population: <span className="font-light">{country.population}</span>
        </p>
        <p className="font-semibold">
          Region: <span className="font-light">{country.region}</span>
        </p>
        <p className="font-semibold">
          Capital: <span className="font-light">{country.capital}</span>
        </p>
      </div>
    </Link>
  );
};
