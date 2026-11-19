import { useState } from "react";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiSend,
  FiArrowUpRight,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields before sending.");
      return;
    }
    alert(`Thank you, ${formData.name}! Your message has been sent successfully.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <div className="contact-wrapper">
          {/* Left Intro */}
          <div className="contact-intro">
           

            <h2>
              Let's build something <em>meaningful.</em>
            </h2>

            <p>
              Have a project idea, collaboration opportunity, or simply want to
              connect? Feel free to reach out.
            </p>

            <a
              href="mailto:rifatahamed523@gmail.com"
              className="email-link"
            >
              <FiMail className="email-icon" />
              <span>rifatahamed523@gmail.com</span>
              <FiArrowUpRight className="arrow-icon" />
            </a>
          </div>

          {/* Right Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <span>GET IN TOUCH</span>
              <FiSend />
            </button>
          </form>
        </div>

        {/* Social Links Cards */}
        <div className="contact-socials">
          <a
            href="https://github.com/rifadahamed"
            target="_blank"
            rel="noreferrer"
            className="social-card"
          >
            <div className="social-icon">
              <FiGithub />
            </div>
            <div className="social-info">
              <span>GitHub</span>
              <small>@rifadahamed</small>
            </div>
            <FiArrowUpRight className="social-arrow" />
          </a>

          <a
            href="https://linkedin.com/in/rifad-ahamed-3972b8355"
            target="_blank"
            rel="noreferrer"
            className="social-card"
          >
            <div className="social-icon">
              <FiLinkedin />
            </div>
            <div className="social-info">
              <span>LinkedIn</span>
              <small>Rifad Ahamed</small>
            </div>
            <FiArrowUpRight className="social-arrow" />
          </a>

          <a
            href="https://facebook.com/rifadahamed523"
            target="_blank"
            rel="noreferrer"
            className="social-card"
          >
            <div className="social-icon">
              <FiFacebook />
            </div>
            <div className="social-info">
              <span>Facebook</span>
              <small>@rifadahamed523</small>
            </div>
            <FiArrowUpRight className="social-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;