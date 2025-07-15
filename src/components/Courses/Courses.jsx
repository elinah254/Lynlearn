import styles from './Courses.module.css';
import CourseCard from './CourseCard';

function Courses() {
  const courses = [
    {
      title: "Intro to JavaScript",
      tags: ["Beginner", "Frontend"],
      desc: "Get started with coding basics using JavaScript.",
      action: "View Course",
      bg: "yellow"
    },
    {
      title: "React Essentials",
      tags: ["Frontend", "JavaScript"],
      desc: "Learn how to build apps with React components.",
      action: "View Course",
      bg: "blue"
    },
    {
      title: "Python for Beginners",
      tags: ["Beginner", "Python"],
      desc: "Start your journey into Python programming.",
      action: "Mark as Complete",
      bg: "dark"
    }
  ];

  const filters = ["Frontend", "Backend", "JavaScript", "Python"];

  return (
    <section className={styles.coursesSection}>
      <h2>Courses</h2>

      <div className={styles.filters}>
        {filters.map((filter, i) => (
          <button key={i} className={styles.filterBtn}>
            {filter}
          </button>
        ))}
        <input type="search" placeholder="Search..." className={styles.searchInput} />
      </div>

      <div className={styles.grid}>
        {courses.map((course, i) => (
          <CourseCard key={i} {...course} />
        ))}
      </div>
    </section>
  );
}

export default Courses;
