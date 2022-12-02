import { FC, useEffect, useState } from "react";

import { Country } from "../Components/Country";
import { Filters } from "../Components/Filters";
import { ListingsGrid } from "../Components/ListingsGrid";
import { type Country as country } from "../Hooks/UseCountries";
import useScroll from "../Hooks/UseScroll";

type props = {
  data: country[];
};

const Homepage: FC<props> = ({ data }) => {
  const [filter, setFilter] = useState<string>("default");
  const [countries, setCountries] = useState<country[]>([]);

  useEffect(() => {
    const savedFilter = sessionStorage.getItem("filter");

    if (savedFilter) setFilter(savedFilter);
  }, []); // eslint-disable-line

  useEffect(() => {
    loadCountries();
  }, [filter]); // eslint-disable-line

  useScroll("Homepage");

  const handleFilter = (option: string) => {
    setFilter(option);
    sessionStorage.setItem("filter", option);
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

  function loadCountries() {
    if (filter === "default") {
      return setCountries(data);
    }

    const countriesFiltered = data.filter(
      (country) => country.region === filter
    );

    setCountries(countriesFiltered);
  }

  return (
    <main className="flex flex-col gap-2">
      <Filters
        activeFilter={filter}
        handleFilter={handleFilter}
        handleSearch={handleSearch}
      />

      <ListingsGrid>
        {countries.map((country, index) => (
          <Country key={index} country={country} />
        ))}
      </ListingsGrid>
    </main>
  );
};

export default Homepage;
