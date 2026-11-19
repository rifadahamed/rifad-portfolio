import {
  FiCode,
  FiGlobe,
  FiDatabase,
  FiLayers,
  FiTool,
  FiGitBranch,
} from "react-icons/fi";

const Skills = () => {
  const skillCategories = [
    {
      icon: <FiCode />,
      title: "Programming",
      skills: ["Python", "C", "Java"],
    },
    {
      icon: <FiGlobe />,
      title: "Web Development",
      skills: ["HTML", "CSS"],
    },
    {
      icon: <FiDatabase />,
      title: "Databases",
      skills: ["MySQL"],
    },
    {
      icon: <FiLayers />,
      title: "Frameworks & Libraries",
      skills: [],
      comingSoon: true,
    },
    {
      icon: <FiTool />,
      title: "Tools & Technologies",
      skills: [],
      comingSoon: true,
    },
    {
      icon: <FiGitBranch />,
      title: "Version Control",
      skills: ["Git", "GitHub"],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <div className="section-heading">
          <h2>
            Technologies I <span className="gradient-text">work with.</span>
          </h2>
          <p>
            A growing set of technical skills I use to learn, build, and solve
            problems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card glass-panel" key={category.title}>
              <div className="skill-card-top">
                <div className="skill-icon">{category.icon}</div>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3>{category.title}</h3>

              {category.comingSoon ? (
                <span className="skill-coming">Coming soon</span>
              ) : (
                <div className="skill-tags">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;