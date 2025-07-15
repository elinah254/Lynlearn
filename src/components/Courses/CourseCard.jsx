import styles from './Courses.module.css';

function CourseCard({ title, tags, desc, action, bg }) {
  return (
    <div className={`${styles.courseCard} ${styles[bg]}`}>
      <h3>{title}</h3>
      <div className={styles.tags}>
        {tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
      <p>{desc}</p>
      <button className={styles.courseBtn}>{action}</button>
    </div>
  );
}

export default CourseCard;
