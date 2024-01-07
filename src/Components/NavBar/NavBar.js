import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import logo from '../../Assets/Kaks_Logo.png';
import './NavBar.css';
// import close from '../../Assets/x-lg.svg';
// import menu from '../../Assets/list.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';



const MenuButton = ({ onClick }) => (
  <div style={{cursor: "pointer"}}>
    <FontAwesomeIcon onClick={onClick} size='2x' style={{color: "white"}} icon={faBars} />
    </div>
 );


 const FullScreenMenu = ({ isOpen, setIsOpen, children }) => {
 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <div className={`fullscreen-menu ${isOpen ? 'open' : ''}`}>
      <div style={{float: "right", marginRight: "15px", marginTop: "5px" }}>
      <FontAwesomeIcon style={{cursor: "pointer"}}onClick={toggleMenu} size="2x" icon={faXmark} />
      </div>  
     {children}
     <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
 };




function NavBar() {
  const isSmallScreen = useMediaQuery('(max-width:1024px)');
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const menuItems = [
    { to: '/', text: 'About' },
    { to: '/projects', text: 'Projects' },
    { to: '/contacts', text: 'Contacts' },
   ];

   const menuItemsnav = [
    { name: 'About', route: '/' },
    { name: 'Projects', route: '/projects' },
    { name: 'Contacts', route: '/contacts' },
   ];
   
 
  return (
    <div className="NavBar" style={{position: "sticky", top: "0", backdropFilter: "blur(50px)"}}>
      <Link to="/">
        <img src={logo} className="App-logo-Nav" alt="logo" />
      </Link>
      {isSmallScreen ? (
        <>
          <button onClick={toggleMenu}>Menu</button>
          {showMenu && (
            <ul className="NavMenu">
            {menuItemsnav.map((item, index) => (
              <li key={index}>
                <Link to={item.route} className="link">
                  {item.name}
                </Link>
              </li>
            ))}
           </ul>
          )}
        </>
      ) : (
        <>
        <div>
          <MenuButton onClick={() => setIsOpen(true)} />
          {isOpen && (
          <FullScreenMenu isOpen={isOpen} setIsOpen={setIsOpen}> 
            <ul className="fullscreenmenu">
              {menuItems.map((item, index) => (
                <p key={index}>
                  <Link to={item.to} className="link">
                    {item.text}
                  </Link>
                </p>
              ))}
            </ul>
          </FullScreenMenu>
          )}
        </div>
         {/*  */}
        </>
      )}
    </div>
  );
}

export default NavBar;