import GitHubIcon from "@mui/icons-material/GitHub";
import * as React from "react";
import Badge from "react-bootstrap/Badge";

export default function MultiActionAreaCard({
  year,
  title,
  descripcion,
  tags,
  repositorio,
}) {
  return (
    <>
      <td>{year}</td>
      <td>{title}</td>
      <td>{descripcion}</td>
      <td>
        {tags.map((valor, index) => (
          <Badge
            bg=""
            key={index}
            style={{
              marginRight: "5px",
              backgroundColor: "#E7E8AD",
              color: "black",
            }}
          >
            {valor}
          </Badge>
        ))}
      </td>
      <td>
        <a
          href={repositorio}
          rel="noreferrer"
          target="_blank"
          style={{ color: "#D1D1D1", textDecoration: "none" }}
        >
          GitHub
          <GitHubIcon sx={{ color: "#D1D1D1", paddingLeft: "5px" }} />
        </a>
      </td>
    </>
  );
}
