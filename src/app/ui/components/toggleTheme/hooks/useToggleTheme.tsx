import { useEffect, useState } from "react";

export const useToggleTheme = () => {
  const [theme, setTheme] = useState("winter");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      setTheme(savedTheme ? savedTheme : "winter");
    }
  }, []);

  const handlerToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? "night" : "winter";
    setTheme(newTheme);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      document.querySelector("html")?.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return { handlerToggle, theme };
};
