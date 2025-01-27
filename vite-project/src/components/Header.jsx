import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">
          <Link to="/">Travel Blog</Link>
        </h1>
        <div>
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/create">Create Post</Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;
