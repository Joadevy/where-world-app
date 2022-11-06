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
      <div className="">
        <div>
          {/* Search icon here */}
          <img alt="" src="" />
        </div>
        <input
          placeholder="Search for a country..."
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      <div>
        <select
          name="continent"
          value={filter}
          onChange={(e) => handleFilter(e.target.value as Continent)}
        >
          <option disabled hidden value="default">
            Filter by region
          </option>
          <option value="default">All</option>
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
