import { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  /* Active Section Observer & Scroll background */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      const navbarHeight = 80;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - navbarHeight - 20;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Perfect Offset Smooth Scroll */
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);

    const target = document.querySelector(href);
    if (!target) return;

    // নেভবারের জন্য ৮০০পিক্সেল অফসেট গ্যাপিং (যাতে হেডিংটা ঠিক নেভবারের নিচে সুন্দর পজিশনে বসে)
    const navbarHeight = 80; 
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setActiveSection(href.substring(1));
  };

  const handleLogoClick = () => {
    setMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setActiveSection("home");
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* LOGO */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            handleLogoClick();
          }}
        >
          Rifad Ahamed.<span className="logo-dot">.</span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-nav">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={activeSection === sectionId ? "active" : ""}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.name}
              </a>
            );
          })}

          <a
            href="/Rifad-Ahamed-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="desktop-cv-btn"
          >
            <FiDownload />
            CV
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE NAVIGATION DRAWER */}
      <div className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}>
        {navItems.map((item) => {
          const sectionId = item.href.substring(1);
          return (
            <a
              key={item.name}
              href={item.href}
              className={activeSection === sectionId ? "active" : ""}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.name}
            </a>
          );
        })}

        <a
          href="/Rifad-Ahamed-CV.pdf"
          target="_blank"
          rel="noreferrer"
          download
          className="mobile-cv"
          onClick={() => setMenuOpen(false)}
        >
          <FiDownload />
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Navbar;