import React, { useState, useEffect } from "react";

function Navbar() {
  // State to manage the theme
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to the body when darkMode is true
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 hover:scale-105 transition-all duration-300 ease-in-out">
          Portfolio 🚀
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="hover:text-gray-200 text-lg font-semibold transition-all duration-300 transform hover:scale-105 font-serif"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-gray-200 text-lg font-semibold transition-all duration-300 transform hover:scale-105 font-serif"
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-gray-200 text-lg font-semibold transition-all duration-300 transform hover:scale-105 font-serif"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                className="hover:text-gray-200 text-lg font-semibold transition-all duration-300 transform hover:scale-105 font-serif"
              >
                Certifications
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-gray-200 text-lg font-semibold transition-all duration-300 transform hover:scale-105 font-serif"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-gray-200 text-lg font-semibold transition-all duration-300 transform hover:scale-105 font-serif"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-200 text-lg font-semibold transition-all duration-300 transform hover:scale-105 font-serif"
              >
                Contact Me
              </a>
            </li>
            <li>
              <a
                href="https://piysing14.github.io/gear/"
                className="hover:text-gray-200 text-lg font-semibold transition-all duration-300 transform hover:scale-105 font-serif"
              >
                Gears
              </a>
            </li>
            <li>
              <a
                href="https://piysing14.github.io/travel-page/"
                className="hover:text-gray-200 text-lg font-semibold transition-all duration-300 transform hover:scale-105 font-serif"
              >
                Travel
              </a>
            </li>
          </ul>
        </nav>
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="text-2xl transition-all duration-300 transform hover:scale-110"
        >
          {darkMode ? (
            <span role="img" aria-label="light-mode">
              🌞
            </span>
          ) : (
            <span role="img" aria-label="dark-mode">
              🌙
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
