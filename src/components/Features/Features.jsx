function Features() {
  const features = [
    {
      title: "Interactive Lessons",
      desc: "Learn by doing with an engaging, hands-on exercise.",
      icon: "🧠"
    },
    {
      title: "Beginner-Friendly",
      desc: "Start from scratch with courses designed for coding newbies.",
      icon: "👶"
    },
    {
      title: "Hands-on Projects",
      desc: "Build real-world projects to apply and reinforce your skills.",
      icon: "🛠️"
    }
  ];

  return (
    <section className="features">
      {features.map((f, i) => (
        <div key={i} className="feature">
          <div className="icon">{f.icon}</div>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
