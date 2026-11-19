import { useState } from "react";
import {
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
} from "react-icons/fi";

import projects from "../data/projects";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="projects-section">
      {/* Particle animation clear view-এর জন্য zIndex: 2 */}
      <div className="section-container" style={{ position: "relative", zIndex: 2 }}>
        
        {/* Section Header */}
        <div className="section-heading">
          
          <h2>
            Things I've <span className="gradient-text">built.</span>
          </h2>
          <p>
            A collection of projects I've worked on while learning,
            experimenting, and solving real-world problems with technology.
          </p>
        </div>

        {/* Dynamic Category Filter Buttons */}
        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? "active" : ""}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              className={`project-card glass-panel ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.id}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="project-image"
                />
                <div className="project-overlay">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                    >
                      <FiGithub />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-content">
                <div className="project-top">
                  <span className="project-category">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="featured-label">
                      Featured
                    </span>
                  )}
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="tech-tag">
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-btn"
                    >
                      <FiGithub />
                      <span>code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link-btn primary"
                    >
                      <span>Live Demo</span>
                      <FiArrowUpRight />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;