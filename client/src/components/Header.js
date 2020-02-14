import React from "react";
import { useToggle } from "../hooks/useToggle";



const Header = () => {
  const [darkMode, setDarkMode] = useToggle("Dark Mode", false);
  // toggle

  const toggleBtn = event => {
    event.preventDefault();
    setDarkMode(!darkMode);
  };

  const whiteFlag = (
    <span role="img" aria-label="white flag emoji">
      🏳️
    </span>
  );
  const darkFlag = (
    <span role="img" aria-label="black flag emoji">
       🏴
    </span>
  );

  return (
    <div className="header">
      <h1 >Soccer Players - Google Search Rankings</h1>
      <button onClick={toggleBtn}>Toggle For Dark Mode{darkMode ? darkFlag : whiteFlag }</button>
    </div>
  );
};

export default Header;
