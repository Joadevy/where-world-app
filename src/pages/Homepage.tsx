import { FC, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { Country } from "../Components/Country";
import { Filters } from "../Components/Filters";
import { ListingsGrid } from "../Components/ListingsGrid";
import { type Country as country } from "../Hooks/UseCountries";

type props = {
  data: country[];
};

const Homepage: FC<props> = ({ data }) => {
  const [filter, setFilter] = useState<string>("default");
  const [countries, setCountries] = useState<country[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const savedFilter = sessionStorage.getItem("filter");

    if (savedFilter) setFilter(savedFilter);
  }, []); // eslint-disable-line

  useEffect(() => {
    setCountries([]);
    setHasMore(true);

    loadFirstCountries();
  }, [filter]); // eslint-disable-line

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

  function loadFirstCountries() {
    if (filter === "default") {
      return setCountries(data.slice(0, 10));
    }

    // Optimization: only need the first 15 elements that matches the filter.
    const countriesFiltered = data.filter(
      (country) => country.region === filter
    );

    setCountries(countriesFiltered.slice(0, 10));
  }

  function loadMoreCountries() {
    let moreCountries: country[] = [];

    let countriesFiltered: country[] = [];

    if (filter === "default") {
      countriesFiltered = data;
    } else {
      countriesFiltered = data.filter((country) => country.region === filter);
    }

    if (countries.length <= countriesFiltered.length - 10) {
      moreCountries = countriesFiltered.slice(
        countries.length,
        countries.length + 10
      );
    } else {
      moreCountries = countriesFiltered.slice(
        countries.length,
        countriesFiltered.length
      );

      setHasMore(false);
    }

    setCountries(countries.concat(moreCountries));
  }

  return (
    <main className="flex flex-col gap-2">
      <Filters
        activeFilter={filter}
        handleFilter={handleFilter}
        handleSearch={handleSearch}
      />
      <InfiniteScroll
        dataLength={countries.length}
        hasMore={hasMore}
        loader={null}
        next={loadMoreCountries}
      >
        <ListingsGrid>
          {countries.map((country, index) => (
            <Country key={index} country={country} />
          ))}
        </ListingsGrid>
      </InfiniteScroll>
    </main>
  );
};

export default Homepage;
