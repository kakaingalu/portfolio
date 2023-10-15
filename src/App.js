import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contacts from './Components/Contacts/Contacts';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      {/* <NavBar />
       */}
      </div>
    </Router>
  );
}

export default App;
