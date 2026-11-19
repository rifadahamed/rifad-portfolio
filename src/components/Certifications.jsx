import { FiAward, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import certificates from "../data/certificates";

const Certifications = () => {
  return (
    <section id="certifications" className="section certifications-section">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="section-heading">
          
          <h2>
            Learning beyond the <span>classroom.</span>
          </h2>
          <p>
            Certifications and learning achievements that support my technical
            growth and continuous learning journey.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="certifications-grid">
          {certificates.map((certificate, index) => (
            <article className="certificate-card" key={certificate.id || index}>
              <div className="certificate-top">
                <div className="certificate-icon">
                  <FiAward />
                </div>
                <span className="certificate-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="certificate-content">
                <span className="certificate-year">{certificate.year}</span>
                <h3 className="certificate-title">{certificate.name}</h3>
                <p className="certificate-issuer">{certificate.issuer}</p>
              </div>

              <a
                href={certificate.link}
                target="_blank"
                rel="noreferrer"
                className="certificate-link"
              >
                <span>View Certificate</span>
                <div className="link-icons">
                  <FiExternalLink className="icon-default" />
                  <FiArrowUpRight className="icon-hover" />
                </div>
              </a>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;