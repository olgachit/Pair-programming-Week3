import aboutImg from "../assets/images/about.jpeg";
import styles from "../About.module.css";

const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>
          about <span>us</span>
        </h2>
      </div>
      <div className={`section-center ${styles["about-center"]}`}>
        <div className={styles["about-img"]}>
          <img
            src={aboutImg}
            className={styles["about-photo"]}
            alt="awesome beach"
          />
        </div>
        <article className={styles["about-info"]}>
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
