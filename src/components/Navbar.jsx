import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-blue-600 font-bold text-xl">ContentBriefly</h1>
      <div className="space-x-4">
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          Home
        </Link>
        <Link to="/login" className="text-blue-600 hover:text-blue-800">
          Login
        </Link>
        <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
