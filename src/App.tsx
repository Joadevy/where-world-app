import type { Country } from "./Hooks/UseCountries";

import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useCountries } from "./Hooks/UseCountries";
import Details from "./pages/Details";
import Homepage from "./pages/Homepage";
import { SwitchTheme as SwitchThemeButton } from "./Components/SwitchTheme";

function App() {
  const { status, countries } = useCountries(
    "https://restcountries.com/v3.1/all"
  );

  if (!status) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <header className="flex justify-between px-6 lg:px-20 py-8 mb-8 bg-slate-50 shadow dark:bg-d-blue-dark">
        <Link to="/">
          <h1 className="font-bold text-lg">Where in the world?</h1>
        </Link>
        <SwitchThemeButton />
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
