import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/Journey.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section" id="about">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Little more about my <strong className="yellow">journey</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
           <strong className="yellow">Tech Stack </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="yellow">Tools</strong>
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
