import { FC, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { Country } from "../Components/Country";
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
      <div className="flex flex-col lg:mx-20 lg:flex-row lg:justify-between lg:items-center">
        <div className="flex items-center m-5 rounded-md px-8 py-4 dark:bg-d-blue-dark shadow lg:mx-0">
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

        <div className="mx-5 my-3 lg:mx-0">
          <select
            className="form-select px-8 py-4 border-none cursor-pointer rounded-md drop-shadow-md dark:bg-d-blue-dark w-72 hover:outline-none focus:ring focus:ring-white dark:focus:ring-vd-blue-dark focus:ring-opacity-100"
            name="continent"
            value={filter}
            onChange={(e) => handleFilter(e.target.value)}
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
      </div>

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
