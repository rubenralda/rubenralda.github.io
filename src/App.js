import React, { useState } from "react";
import Content from "./PrimeraSeccion/Content/Content";
import Header from "./PrimeraSeccion/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Proyectos from "./SegundaSeccion/TablaProyectos";

export default function AppComponent() {
  const [selectedSection, setSelectedSection] = useState("about");
  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };
  return (
    <div className="app main">
      <section className="primera-seccion">
        <Header handleSectionChange={handleSectionChange} selectedSection={selectedSection}/>
        <Content selectedSection={selectedSection} />
      </section>
      <section id="proyectos" style={{ paddingTop: "5%", margin : "10%" }}>
        <Row>
        <h1 style={{ marginBottom: "25px" }}>Todos los proyectos</h1>
        <Proyectos />
        </Row>
      </section>
    </div>
  );
}
