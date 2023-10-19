import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import logo from '../../Assets/Kaks_Logo.png';

function NavBar() {
  const isSmallScreen = useMediaQuery('(max-width:768px)');
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="NavBar">
      <Link to="/">
        <img src={logo} className="App-logo-Nav" alt="logo" />
      </Link>
      {isSmallScreen ? (
        <>
          <button onClick={toggleMenu}>Menu</button>
          {showMenu && (
            <ul className="NavMenu">
              <li>
                <Link to="/projects" className="link">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="link">
                  Contacts
                </Link>
              </li>
            </ul>
          )}
        </>
      ) : (
        <ul className="NavBar">
          <h1>
          </h1>
          <h1>
            <Link to="/projects" className="link NavBar">
              Projects
            </Link>
          </h1>
          <h1>
            <Link to="/contacts" className="link NavBar">
              Contacts
            </Link>
          </h1>
        </ul>
      )}
    </div>
  );
}

export default NavBar;