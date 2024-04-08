import { useEffect, useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export const ThemeToggler = ({ addText, textSize }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function setTheme() {
    const selectedTheme = localStorage.getItem("theme");
    document.body.classList.add(selectedTheme);
    if (selectedTheme === "dark") {
      document.body.classList.remove("light");
      setIsDarkMode(true);
    } else {
      document.body.classList.remove("dark");
      setIsDarkMode(false);
    }
  }

  useEffect(() => {
    const selectedTheme = localStorage.getItem("theme");
    setTheme();
    if (selectedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleClick = () => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      setIsDarkMode(false);
      setTheme();
    } else {
      localStorage.theme = "dark";
      setIsDarkMode(true);
      setTheme();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full transition-all duration-200 ${
        addText ? (textSize ? textSize : "text-lg") : "text-3xl"
      } flex items-center gap-2`}
    >
      {isDarkMode ? (
        <MdOutlineDarkMode className="text-tsecondary hover:text-tdisabled transition-all" />
      ) : (
        <MdOutlineLightMode className="text-tsecondary hover:text-tdisabled transition-all" />
      )}
      {addText && (isDarkMode ? "Dark Mode" : "Light Mode")}
    </button>
  );
};
