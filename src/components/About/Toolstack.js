import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiJirasoftware,
  SiGithub,
  SiSubversion, // SVN
  SiEclipseide,
  SiVisualstudio,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiJirasoftware />
        <p style={{fontSize:'15px'}}>Jira</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p style={{fontSize:'15px'}}>GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSubversion />
        <p style={{fontSize:'15px'}}>SVN</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiEclipseide />
        <p style={{fontSize:'15px'}}>Eclipse</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
        <p style={{fontSize:'15px'}}>Visual Studio</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
