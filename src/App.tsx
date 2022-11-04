import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useCountries } from "./Hooks/UseCountries";
import { useTheme } from "./Hooks/UseTheme";
import Details from "./pages/Details";
import Homepage from "./pages/Homepage";

function App() {
  const { theme, handleTheme } = useTheme();
  // const { status, countries } = useCountries("./data.json");
  const { status, countries } = useCountries(
    "https://restcountries.com/v3.1/all"
  );

  if (!status) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <header className="flex justify-between mx-4 my-8">
        <Link to="/">
          <h1 className="font-bold text-lg">Where in the world?</h1>
        </Link>
        <button onClick={() => handleTheme(localStorage.theme)}>
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <Routes>
        <Route element={<Homepage data={countries} />} path="/" />
        <Route element={<Details />} path="/country/:id" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
