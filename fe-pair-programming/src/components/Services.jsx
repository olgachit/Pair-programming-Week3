import { services } from '../data'
import Title from './Title'
import Service from './Service'
import styles from '../Services.module.css'

const Services = () => {
  return (
    <section className={`section ${styles.services}`} id='services'>
      <Title title='our' subTitle='services' />

      <div className={`section-center ${styles['services-center']}`}>
        {services.map((service) => {
          return <Service {...service} key={service.id} />
        })}
      </div>
    </section>
  )
}
export default Services