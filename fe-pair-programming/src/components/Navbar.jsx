import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'
import styles from '../Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <PageLinks parentClass={styles['nav-links']} itemClass={styles['nav-link']} />
      <SocialLinks parentClass={styles['nav-icons']} itemClass={styles['nav-icon']} />
    </>
  );
};

export default Navbar;
