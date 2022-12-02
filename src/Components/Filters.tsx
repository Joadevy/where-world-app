import { type FC } from "react";

type props = {
  handleSearch: (_: string) => void;
  handleFilter: (_: string) => void;
  activeFilter: string;
};

export const Filters: FC<props> = ({
  handleSearch,
  handleFilter,
  activeFilter,
}) => {
  return (
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
          aria-label="pick a continent"
          className="form-select px-8 py-4 border-none cursor-pointer rounded-md drop-shadow-md dark:bg-d-blue-dark w-72 hover:outline-none focus:ring focus:ring-white dark:focus:ring-vd-blue-dark focus:ring-opacity-100"
          name="pick a continent"
          value={activeFilter}
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
  );
};
