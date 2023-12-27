import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Navigation from "./Navigation";
import Col from "react-bootstrap/Col";

export default function Header(props) {
  return (
    <Col className="header">
      <h1 style={{ fontSize: "80px", margin: "0px" }}>Rubén Ralda</h1>
      <h2 style={{ fontSize: "35px", margin: "0px" }}>Programador Junior</h2>
      <Navigation {...props} />
      <SocialMedia />
    </Col>
  );
}

function SocialMedia() {
  return (
    <div style={{ paddingTop: "200px" }}>
      <a href="https://github.com/rubenralda" rel="noreferrer" target="_blank" style={{paddingRight : "15px"}}>
        <GitHubIcon sx={{ color: "#D1D1D1" }} />
      </a>
      <a
        href="https://linkedin.com/in/rubén-ralda"
        rel="noreferrer"
        target="_blank"
      >
        <LinkedInIcon sx={{ color: "#D1D1D1" }} />
      </a>
    </div>
  );
}
