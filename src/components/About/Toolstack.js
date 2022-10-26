import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={3} md={3} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={3} md={3} className="tech-icons">
        <SiPostman />
      </Col>
      
      <Col xs={3} md={3} className="tech-icons">
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Toolstack;
