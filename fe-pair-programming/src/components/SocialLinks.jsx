import { socialLinks } from '../data'
import SocialLink from './SocialLink'
import style from '../Navbar.module.css';

function SocialLinks({ parentClass, itemClass }) {
  return (
    <ul className={parentClass} id={style['nav-links']}>
      {socialLinks.map((link) => {
        return <SocialLink key={link.id} link={link} itemClass={itemClass} />
      })}
    </ul>
  )
}

export default SocialLinks;
