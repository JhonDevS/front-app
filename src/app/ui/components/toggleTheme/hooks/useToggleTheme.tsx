import { useEffect, useState } from "react";

export const useToggleTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

  const handlerToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.checked){
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  
  useEffect(() => {
    localStorage.setItem("theme", theme ? theme : "light");
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html")?.setAttribute("data-theme", localTheme ? localTheme : "light");
  }, [theme]);

  return { handlerToggle, theme };
}