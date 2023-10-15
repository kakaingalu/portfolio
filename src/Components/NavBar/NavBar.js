import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/11zon_cropped.png';

function NavBar() {
  return (
    <div className="NavBar">
      <Link to="/" >
       <img src={logo} className="App-logo-Nav" alt="logo" />
      </Link>
      <h1>
        <Link to="/" >About</Link>
      </h1>
      <h1>
      <Link to="/projects" >Projects</Link>
      </h1>
      <h1>
      <Link to="/contacts" >Contacts</Link>
      </h1>
    </div>
  );
}

export default NavBar;