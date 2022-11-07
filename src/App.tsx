import type { Country } from "./Hooks/UseCountries";

import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import nightmode from "./assets/icons/dm.svg";
import { useCountries } from "./Hooks/UseCountries";
import { useTheme } from "./Hooks/UseTheme";
import Details from "./pages/Details";
import Homepage from "./pages/Homepage";

function App() {
  const { theme, handleTheme } = useTheme();
  const { status, countries } = useCountries("./data.json");
  // const { status, countries } = useCountries(
  //   "https://restcountries.com/v3.1/all"
  // );

  if (!status) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <header className="flex justify-between px-4 py-8 mb-8 dark:bg-d-blue-dark">
        <Link to="/">
          <h1 className="font-bold text-lg">Where in the world?</h1>
        </Link>

        <div className="flex gap-1 items-center">
          <div className="w-5 h-5">
            {theme === "light" ? (
              <svg
                aria-hidden="true"
                className="svg-inline--fa fa-sun fa-w-16 "
                data-icon="sun"
                data-prefix="fas"
                focusable="false"
                role="img"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                className="svg-inline--fa fa-moon fa-w-16 "
                data-icon="moon"
                data-prefix="fas"
                focusable="false"
                role="img"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-white"
                  d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
                />
              </svg>
            )}
          </div>
          <button onClick={() => handleTheme(localStorage.theme)}>
            {theme === "dark" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </header>
      <Routes>
        <Route element={<Homepage data={countries} />} path="/" />
        {countries.map((country: Country) => (
          <Route
            key={country.name}
            element={<Details countries={countries} country={country} />}
            path={`/country/${country.name}`}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
