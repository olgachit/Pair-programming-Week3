import styles from '../Tours.module.css';

function Tour({ image, date, title, info, location, duration, cost }) {
  return (
    <article className={styles['tour-card']}>
      <div className={styles['tour-img-container']}>
        <img src={image} alt={title} className={styles['tour-img']} />
        <p className={styles['tour-date']}>{date}</p>
      </div>

      <div className={styles['tour-info']}>
        <div className={styles['tour-title']}>
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className={styles['tour-footer']}>
          <p>
            <span>
              <i className="fas fa-map" />
            </span>
            {location}
          </p>
          <p>from €{cost}</p>
          <p>{duration}</p>
        </div>
      </div>
    </article>
  );
}

export default Tour;
