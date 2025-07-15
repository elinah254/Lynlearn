import styles from './Features.module.css';

function Features() {
  const features = [
    {
      icon: '🧠',
      title: 'Interactive Lessons',
      description: 'Learn by doing, with hands-on code exercises and instant feedback.'
    },
    {
      icon: '👶',
      title: 'Beginner-Friendly',
      description: 'No coding experience? No problem! Start from scratch and grow fast.'
    },
    {
      icon: '🛠️',
      title: 'Real Projects',
      description: 'Build simple but real-world projects to apply what you’ve learned.'
    }
  ];

  return (
    <section className={styles.featuresSection}>
      <h2 className={styles.heading}>Why Choose LynLearn?</h2>
      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <div className={styles.featureCard} key={index}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
