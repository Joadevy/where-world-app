import { FC, useState } from "react";

import { Country } from "../Components/Country";
import { ListingsGrid } from "../Components/ListingsGrid";
import { type Country as country } from "../Hooks/UseCountries";

type props = {
  data: country[];
};

type Continent = "Africa" | "America" | "Asia" | "Europe" | "Oceania";

const Homepage: FC<props> = ({ data }) => {
  const [filter, setFilter] = useState<Continent | "default">("default");
  const [countries, setCountries] = useState<country[]>(data);

  const handleFilter = (option: Continent | "default") => {
    if (option !== filter) {
      setFilter(option);
      if (option === "default") {
        setCountries(data);

        return;
      }
      setCountries(data.filter((country) => country.region === option));
    }
  };

  function handleSearch(search: string) {
    setCountries(
      data.filter(
        (country) =>
          country.name.toLowerCase().includes(search.toLowerCase()) &&
          (country.region === filter || filter === "default")
      )
    );
  }

  return (
    <main className="flex flex-col gap-2">
      <div className=" flex items-center m-5 rounded-md px-8 py-4 dark:bg-d-blue-dark">
        <div className="w-5 h-5">
          <svg
            aria-hidden="true"
            className="svg-inline--fa fa-search fa-w-16 "
            data-icon="search"
            data-prefix="fas"
            focusable="false"
            role="img"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              fill="currentColor"
            />
          </svg>
        </div>
        <input
          className="bg-transparent ml-4 w-full outline-none"
          placeholder="Search for a country..."
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div className="mx-5 my-3 border-2 border-white">
        <select
          className="rounded-md px-8 py-4 dark:bg-d-blue-dark cursor-pointer"
          name="continent"
          value={filter}
          onChange={(e) => handleFilter(e.target.value as Continent)}
        >
          <option disabled hidden value="default">
            Filter by region
          </option>
          <option className="hover:cursor-pointer" value="default">
            All
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <ListingsGrid>
        {countries.map((country, index) => (
          <Country key={index} country={country} />
        ))}
      </ListingsGrid>
    </main>
  );
};

export default Homepage;
