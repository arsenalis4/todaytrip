import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation  } from "react-router-dom";
import { Home } from './Pages/Home';
import { Recommendation } from './Pages/Recommendation';

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommend" element={<Recommendation />} />
      </Routes>
  </Router>
  )
}

export default App;
