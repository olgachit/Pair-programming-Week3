import { pageLinks } from '../data'
import PageLink from './PageLink'
import style from '../Navbar.module.css';

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id={style['nav-links']}>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemClass} />
      })}
    </ul>
  )
}
export default PageLinks