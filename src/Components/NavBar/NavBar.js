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
        <Link to="/" className='link' >About</Link>
      </h1>
      <h1>
      <Link to="/projects" className='link'>Projects</Link>
      </h1>
      <h1>
      <Link to="/contacts" className='link' >Contacts</Link>
      </h1>
    </div>
  );
}

export default NavBar;