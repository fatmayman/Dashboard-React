import React from "react";
import "./ProjectsGrid.css";

export default function ProjectsGrid() {
  return (
    <div className="projects-section">
      <h2>Your Projects</h2>
      <div className="projects">
        {[
          { title: "Super Cool Project", desc: "Sed tempus ut lacus ut scelerisque..." },
          { title: "Less Cool Project", desc: "Nullam condimentum ipsum ut lectus..." },
          { title: "Impossible App", desc: "In hac habitasse platea dictumst..." },
          { title: "Easy Peasy App", desc: "Etiam cursus eros ac efficitur..." },
          { title: "Ad Blocker", desc: "Quisque eget rutrum nisl..." },
          { title: "Money Maker", desc: "Praesent convallis, libero quis congue..." },
        ].map((project, idx) => (
          <div key={idx} className="project">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="icons">
              <i className="far fa-star"></i>
              <i className="far fa-eye"></i>
              <i className="fas fa-share-alt"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
