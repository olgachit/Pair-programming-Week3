import Tour from './Tour';
import tour1 from '../assets/images/tour-1.jpeg';
import tour2 from '../assets/images/tour-2.jpeg';
import tour3 from '../assets/images/tour-3.jpeg';
import tour4 from '../assets/images/tour-4.jpeg';

const tours = [
  {
    id: 1,
    image: tour1,
    date: 'August 26th, 2027',
    title: 'Tibet Adventure',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'China',
    duration: '6 days',
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'October 1st, 2027',
    title: 'Best of Java',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Indonesia',
    duration: '11 days',
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'September 15th, 2027',
    title: 'Explore Hong Kong',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Hong Kong',
    duration: '8 days',
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'December 5th, 2027',
    title: 'Kenya Highlights',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Kenya',
    duration: '20 days',
    cost: 3300,
  },
];

function Tours() {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>
      <div className="section-center featured-center">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} />
        ))}
      </div>
    </section>
  );
}

export default Tours;
