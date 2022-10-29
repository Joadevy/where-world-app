import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>();

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

  return handleTheme;
};
