import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks';
import style from '../Footer.module.css';

function Footer() {
  return (
    <footer className={`section footer ${style.footer}`}>
      <PageLinks parentClass={style['footer-links']} itemClass={style['footer-link']} />
      <SocialLinks parentClass={style['footer-icons']} itemClass={style['footer-icon']} />
      <p className={style['copyright']}>
        copyright © travel tours company <span id="date" />. all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
