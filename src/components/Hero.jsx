import {
  FiArrowDown,
  FiArrowUpRight,
} from "react-icons/fi";

const Hero = () => {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (!target) return;
    const navbarHeight = 80;
    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-intro">
            <span className="status-dot"></span>
            Available for opportunities
          </div>

          <h1>
            Hi, I'm <span className="highlight-text">Rifad Ahamed</span>
            <br />
          
          </h1>

          <p className="hero-description">
            A Computing and Information Systems student Mejor in Artificial Intelligence at Daffodil International University passionate about
            programming, artificial intelligence, and building meaningful
            digital solutions and Build AI-powered web app.
          </p>

          <div className="hero-buttons">
            <a
              href="#projects"
              className="primary-btn"
              onClick={(e) => handleScrollTo(e, "#projects")}
            >
              View My Work
              <FiArrowUpRight />
            </a>

            <a
              href="#contact"
              className="secondary-btn"
              onClick={(e) => handleScrollTo(e, "#contact")}
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Profile Visual */}
        <div className="hero-visual">
          <div className="hero-glow"></div>

          <div className="profile-frame">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Rifad Ahamed"
              className="profile-image"
            />
          </div>

          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="scroll-indicator"
        onClick={(e) => handleScrollTo(e, "#about")}
      >
        <span>Scroll to explore</span>
        <FiArrowDown />
      </a>
    </section>
  );
};

export default Hero;