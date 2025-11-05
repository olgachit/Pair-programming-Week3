import styles from '../Services.module.css'

const Service = ({ icon, title, text }) => {
  return (
    <article className={styles.service}>
      <span className={styles['service-icon']}>
        <i className={icon}></i>
      </span>
      <div className={styles['service-info']}>
        <h4 className={styles['service-title']}>{title}</h4>
        <p className={styles['service-text']}>{text}</p>
      </div>
    </article>
  )
}
export default Service