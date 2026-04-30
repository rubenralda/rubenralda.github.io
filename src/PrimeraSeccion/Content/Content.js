import React from "react";
import Estudios from "./ContentEstudios";
import About from "./ContentAbout";

const Content = ({ selectedSection }) => {
  // Renderizar el contenido según la sección seleccionada
  const renderContent = () => {
    switch (selectedSection) {
      case "about":
        return <About />;
      case "estudios":
        return <Estudios />;
      default:
        return <About />;
    }
  };

  return <div className="content">{renderContent()}</div>;
};

export default Content;
