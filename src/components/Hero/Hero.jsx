import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div>
          <h1>
            Start Coding with Confidence on <span className={styles.highlight}>LynLearn</span>
          </h1>
          <p>Free beginner coding courses, mini projects, and interactive quizzes.</p>
          <button className={styles.cta}>Explore Courses</button>
        </div>
        <img src="/hero-img.svg" alt="Person coding" className={styles.heroImage} />
      </div>
    </section>
  );
}

export default Hero;
