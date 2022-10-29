import { useEffect, useState } from "react";

type Theme = "dark" | "light";

type returnTheme = {
  theme: Theme;
  handleTheme: (_x: Theme) => void;
};

export const useTheme = (): returnTheme => {
  const [theme, setTheme] = useState<Theme>(localStorage.theme);

  function handleTheme(actualTheme: Theme) {
    if (actualTheme === "dark") changeTheme("light");
    else if (actualTheme === "light") changeTheme("dark");
  }

  function changeTheme(theme: Theme) {
    setTheme(theme);
    localStorage.theme = theme;
  }

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      changeTheme("dark");
    } else {
      changeTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return { theme, handleTheme };
};
