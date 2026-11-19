import { FiBookOpen, FiCalendar } from "react-icons/fi";

const Education = () => {
  return (
    <section id="education" className="education-section">
      {/* Background Particles দেখানোর জন্য zIndex: 2 */}
      <div className="section-container" style={{ position: "relative", zIndex: 2 }}>
        
        {/* Section Header */}
        <div className="section-heading">
         
          <h2>
            My <span className="gradient-text">academic journey.</span>
          </h2>
          <p>
            My educational background and the foundation behind my technical journey.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="education-list">

          {/* University */}
          <article className="education-card glass-panel current-education">
            <div className="education-icon">
              <FiBookOpen />
            </div>

            <div className="education-content">
              <div className="education-top">
                <span className="education-status status-current">
                  CURRENT
                </span>
                <span className="education-date">
                  <FiCalendar />
                  July 2024 — June 2028
                </span>
              </div>

              <h3>Bachelor of Science (B.Sc.)</h3>
              <h4>Computing and Information Systems (CIS),Mejor in Artificial Intelligence</h4>
              <p className="education-university">
                Daffodil International University
              </p>
              <p className="education-description">
                Currently pursuing my undergraduate degree with a focus on computing,
                programming, software development, and emerging technologies.
              </p>
            </div>
          </article>

          {/* HSC */}
          <article className="education-card glass-panel">
            <div className="education-icon">
              <FiBookOpen />
            </div>

            <div className="education-content">
              <div className="education-top">
                <span className="education-status status-completed">
                  COMPLETED
                </span>
                <span className="education-date">
                  <FiCalendar />
                  2021 — 2023
                </span>
              </div>

              <h3>Higher Secondary Certificate (HSC)</h3>
              <h4>Science Stream</h4>
              <p className="education-university">
                Siddique Memorial School and College, Rangpur
              </p>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
};

export default Education;