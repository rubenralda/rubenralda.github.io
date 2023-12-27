import React from "react";

export default function BoxBasic() {
  return (
    <div
      className="content"
      style={{ paddingBottom: "130px", lineHeight: "150%" }}
    >
      <p style={{ marginTop: "1px", marginBottom: "5px", fontSize: "30px" }}>
        <b>Universidad de San Carlos de Guatemala</b>
      </p>
      <p style={{ marginTop: "1px", marginBottom: "5px", fontSize: "20px" }}>
        Ingeniería en Ciencias y Sistemas
      </p>
      <p style={{ marginTop: "1px", marginBottom: "5px" }}>
        2021 - Actualidad <br></br>Sexto semestre completado.
      </p>
      <p style={{ marginTop: "30px", marginBottom: "5px", fontSize: "30px" }}>
        <b>Instituto Tecnológico de Computación</b>
      </p>
      <p style={{ marginTop: "1px", marginBottom: "5px", fontSize: "20px" }}>
        Bachillerato en Computación con Orientación Científica
      </p>
      <p style={{ marginTop: "1px", marginBottom: "5px" }}>2019 - 2020</p>
    </div>
  );
}
