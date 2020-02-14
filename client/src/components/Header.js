import React from "react";
import { useToggle } from "../hooks/useToggle";



const Header = () => {
  const [darkMode, setDarkMode] = useToggle("Dark Mode", false);
  // toggle

  const toggleBtn = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  };

  const lightMoon = (
    <span role="img" aria-label="light mode moon emoji">
      🏳️
    </span>
  );
  const darkMoon = (
    <span role="img" aria-label="dark mode moon emoji">
       🏴
    </span>
  );

  return (
    <div>
      <h1 className="nav-title">Soccer Players - Google Search Rankings</h1>
      <button onClick={toggleBtn}>Toggle For Dark Mode{darkMode ? darkMoon : lightMoon }</button>
    </div>
  );
};

export default Header;
