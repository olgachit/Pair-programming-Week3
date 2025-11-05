import logo from '../assets/images/logo.svg'
import Navbar from './Navbar'
import styles from '../Navbar.module.css'

function Header() {
  return (
    <header className={styles.navbar}>
      <div className={styles['nav-center']}>
        <div className={styles['nav-header']}>
          <img src={logo} className={styles['nav-logo']} alt='backroads' />
          <button type="button" className={styles['nav-toggle']} id="nav-toggle">
            <i className="fas fa-bars" />
          </button>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
