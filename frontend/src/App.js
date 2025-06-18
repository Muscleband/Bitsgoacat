import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cats from './pages/Cats';
import Memes from './pages/Memes';
import Submit from './pages/Submit';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/memes" element={<Memes />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </Router>
  );
}

export default App;
