import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useTheme } from "./Hooks/UseTheme";
import Homepage from "./Components/Homepage";

function App() {
  const { theme, handleTheme } = useTheme();

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
        <Route element={<Homepage />} path="/" />
        {/* <Route element={<Details />} path="/details/:id" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
