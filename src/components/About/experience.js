import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Experience() {
  return (
    <Container style={{ padding: "50px 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Experience</h2>
      
      <Row style={{ marginBottom: "40px" }}>
        <Col xs={12} md={6}>
          <h4 className="purple">HCL Tech</h4>
          <p><strong>Senior Software Engineer</strong> (January 2024 - Present)</p>
          <ul>
            <li style={{textAlign:'start'}}>Working as a full-stack web developer on the DCEM project.</li>
            <li style={{textAlign:'start'}}>The Data Center Energy Management (DCEM) project focuses on monitoring and optimizing energy consumption in data centers. It provides real-time analytics, predictive insights, and efficiency recommendations using high-performance data processing with ClickHouse. The system integrates with multiple data sources, visualizes key performance indicators, and ensures compliance with energy efficiency standards.</li>
            <li style={{textAlign:'start'}}>Developing front-end applications using React.js, HTML, CSS.</li>
            <li style={{textAlign:'start'}}>Building and maintaining RESTful APIs with NestJS as the backend.</li>
            <li style={{textAlign:'start'}}>Managing databases with PostgreSQL and ClickHouse.</li>
            <li style={{textAlign:'start'}}>Utilizing Jira for project management and GitHub for version control.</li>
            <li style={{textAlign:'start'}}>Following Agile methodologies to ensure efficient development cycles.</li>
          </ul>
        </Col>

        <Col xs={12} md={6}>
          <h4 className="purple">Newgen Software Technologies</h4>
          <p><strong>Software Engineer</strong> (February 2023 - December 2023)</p>
          <ul>
            <li style={{textAlign:'start'}}>Joined as a Software Engineering Trainee, promoted to Software Engineer.</li>
            <li style={{textAlign:'start'}}>Provided client support and gathered requirements.</li>
            <li style={{textAlign:'start'}}>Worked on Newgen Products like OmniApp to create process flows.</li>
            <li style={{textAlign:'start'}}>Developed and tested features using Java, JavaScript, and Oracle SQL.</li>
            <li style={{textAlign:'start'}}>Used SVN, Eclipse, and performed unit testing to ensure high-quality deliverables.</li>
            <li style={{textAlign:'start'}}>Estimated development efforts and ensured timely delivery of tasks.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Experience;
