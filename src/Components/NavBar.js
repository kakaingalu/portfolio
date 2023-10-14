import logo from '../Assets/11zon_cropped.png';

function NavBar() {
  return (
    <div className="NavBar">
       <img src={logo} className="App-logo-Nav" alt="logo" />
      <h1>About</h1>
      <h1>Projects</h1>
      <h1>Contacts</h1>
    </div>
  );
}

export default NavBar;