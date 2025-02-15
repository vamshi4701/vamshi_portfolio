import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiJava, DiPython, DiReact } from "react-icons/di";
import { SiTypescript, SiNestjs, SiPostgresql, SiOracle } from "react-icons/si";
import { FaDatabase } from "react-icons/fa"; // Generic database icon for ClickHouse

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{ fontSize: "15px"  }}>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p style={{ fontSize: "15px"  }}>TypeScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <p style={{ fontSize: "15px"  }}>Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <p style={{ fontSize: "15px"  }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{ fontSize: "15px"  }}>React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs />
        <p style={{ fontSize: "15px"  }}>NestJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p style={{ fontSize: "15px"  }}>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaDatabase />
        <p style={{ fontSize: "15px"  }}>ClickHouse</p> {/* Label for ClickHouse */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOracle />
        <p style={{ fontSize: "15px"  }}>Oracle SQL</p>
      </Col>
    </Row>
  );
}

export default Techstack;
