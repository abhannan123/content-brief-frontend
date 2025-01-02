import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">ContentBriefly</h1>
      <p className="text-lg mb-6">
        Create AI-powered content briefs in minutes. Save time and boost productivity!
      </p>
      <div>
        <Link to="/signup">
          <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 mx-2">
            Get Started
          </button>
        </Link>
        <Link to="/login">
          <button className="bg-blue-600 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-800 mx-2">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
