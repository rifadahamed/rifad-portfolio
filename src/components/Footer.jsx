import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const [views, setViews] = useState(1);

  useEffect(() => {
    // CountAPI ব্যবহার করে ভিউ কাউন্ট লোড ও আপডেট করা
    fetch("https://api.countapi.xyz/hit/rifadahamed-portfolio/visits")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.value) {
          setViews(data.value);
        }
      })
      .catch(() => {
        // API লোড না হলে লোকালস্টোরেজ দিয়ে টেস্ট কাউন্টার চালানো
        const savedViews = parseInt(localStorage.getItem("page_views") || "100", 10) + 1;
        localStorage.setItem("page_views", savedViews);
        setViews(savedViews);
      });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="section-container">
        <div className="footer-inner">
          {/* Brand Name & Visitor Counter (Left) */}
          <div className="footer-brand">
            <h3>
              Rifad Ahamed<span className="logo-dot">.</span>
            </h3>

            {/* Total Visitor Counter Button */}
            <div className="visitor-badge">
              <span>Total Views:</span>
              <span className="visitor-number">{views}</span>
            </div>
          </div>

          {/* Centered & Bold Quote (Middle) */}
          <p className="footer-quote">
            Keep learning, take small steps, and keep creating. Great things take time🖤🖤.
          </p>

          {/* Back to Top Button (Right) */}
          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FiArrowUp />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} All rights reserved. Designed & built with React by Rifad Ahamed.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;