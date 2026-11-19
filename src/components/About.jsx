import { FiTarget, FiCpu, FiCode, FiBookOpen } from "react-icons/fi";


const About = () => {
  return (
    <section id="about" className="about-section">
      {/* Live Glowing Orbs Background */}

      <div className="about-container">
        <div className="section-heading">
          <span className="section-badge">ABOUT ME</span>
          <h2>
            Building with <span className="gradient-text">curiosity</span> and purpose.
          </h2>
        </div>

        <div className="about-grid">
          {/* Main Glass Card */}
          <div className="about-banner glass-panel">
            <p className="about-big-text">
              I’m a Computing and Information Systems student at DIU with a strong
              interest in technology, artificial intelligence, and software
              development.
            </p>
            <p className="about-sub-text">
              I enjoy solving real world problems through technology and
              continuously learning new programming concepts to build modern
              digital solutions.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="about-cards-grid">
            <div className="about-card glass-panel">
              <div className="about-icon-wrapper">
                <FiTarget />
              </div>
              <div className="about-card-info">
                <h3>Career Goal</h3>
                <p>
                  Become an Expert AI Engineer and develop intelligent systems
                  that solve complex everyday challenges.
                </p>
              </div>
            </div>

            <div className="about-card glass-panel">
              <div className="about-icon-wrapper">
                <FiCpu />
              </div>
              <div className="about-card-info">
                <h3>Main Interests</h3>
                <p>
                  Programming, Artificial Intelligence and Software
                  Development.
                </p>
              </div>
            </div>

            <div className="about-card glass-panel">
              <div className="about-icon-wrapper">
                <FiCode />
              </div>
              <div className="about-card-info">
                <h3>Focus Areas</h3>
                <p>
                  Machine Learning Fundamentals, Web Development, Data
                  Analysis and Object-Oriented Programming.
                </p>
              </div>
            </div>

            <div className="about-card glass-panel">
              <div className="about-icon-wrapper">
                <FiBookOpen />
              </div>
              <div className="about-card-info">
                <h3>Always Learning</h3>
                <p>
                  Exploring new technologies and improving my development
                  skills through practical projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;