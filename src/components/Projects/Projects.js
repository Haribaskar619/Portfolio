import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import QuizD from "../../Assets/Projects/QuizD.png";

import Portfolio from "../../Assets/Projects/Portfolio.png";
import chatZ from "../../Assets/Projects/chatZ.png";

import Eshop from "../../Assets/Projects/Eshop.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatZ}
              isProfile={false}
              title="ChatZ"
              description="A web based interactive chat application."
              feLink="https://github.com/Haribaskar619/ChatZ-Frontend"
              belink="https://github.com/Haribaskar619/ChatZ-Backend"
              demoLink="https://chatz-chat.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eshop}
              isProfile={false}
              title="Eshop"
              description="It is a basic Ecommerce website where we can order and buy a product."
              feLink="https://github.com/Haribaskar619/Eshop---Frontend"
              belink="https://github.com/Haribaskar619/Eshop-Backend"
              demoLink="https://eshop-shop.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QuizD}
              isProfile={false}
              title="QuizD"
              description="Basic Quiz application which allows a user to answer a set of pre defined questions"
              feLink="https://github.com/Haribaskar619/QuizD-Frontend"
              beLink="https://github.com/Haribaskar619/QuizD-Backend"
              demoLink="https://quizd-quizapp.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isProfile={true}
              title="Portfolio"
              description="My Personal Portfolio website."
              feLink="https://github.com/Haribaskar619/Portfolio"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
