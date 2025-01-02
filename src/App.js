import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/LoginPage';
import Signup from './pages/SignUp';
import BriefGenerator from './pages/BriefGenerator';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/brief-generator" element={<BriefGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
