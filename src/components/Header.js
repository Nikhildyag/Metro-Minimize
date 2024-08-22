import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Metro Minimize</div>
        <nav>
          <ul className="flex space-x-4">
            <li className="hover:underline">
              <a href="/">Home</a>
            </li>
            <li className="hover:underline">
              <a href="/about">About</a>
            </li>
            <li className="hover:underline">
              <a href="/map">Map</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
