import React from "react";
import Estudios from "./ContentEstudios";
import About from "./ContentAbout";
import Col from "react-bootstrap/Col";

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

  return <Col>{renderContent()}</Col>;
};

export default Content;
