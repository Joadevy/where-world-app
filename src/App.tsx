import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useTheme } from "./Hooks/UseTheme";
import Homepage from "./Components/Homepage";

function App() {
  const handleTheme = useTheme();

  return (
    <BrowserRouter>
      <header className="flex justify-between">
        <Link to="/">Where in the world?</Link>
        <button onClick={() => handleTheme(localStorage.theme)}>
          Change theme
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
