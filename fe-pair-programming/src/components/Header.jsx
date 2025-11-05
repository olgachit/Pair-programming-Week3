import logo from '../assets/images/logo.svg'
import Navbar from './Navbar'

function Header() {
  return (
    <header className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars" />
          </button>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
