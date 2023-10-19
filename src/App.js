import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Contacts from './Components/Contacts/Contacts';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
