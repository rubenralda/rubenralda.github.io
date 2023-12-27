import React from "react";

const Navigation = ({ handleSectionChange, selectedSection }) => {
  return (
    <>
      <nav className="navigation">
        <ul>
          <li onClick={() => handleSectionChange("about")} className={selectedSection === "about" ? "selected" : ""}>Sobre mí</li>
          <li onClick={() => handleSectionChange("estudios")} className={selectedSection === "estudios" ? "selected" : ""}>Estudios</li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
