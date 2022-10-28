import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           I was working with Kuwait Oil Corp for the past 5 years managing End to End Service orders, Invoice managment with ERP facilitations. Since my teen I was always amused by technology, gadgets and curious on how software works. When I returned to India, I decided to <strong className="green">switch my career into tech and pursue things that I'm more interested in.</strong>
<br/><br/>
          I started to learn myself how to code intially and eventually joined a <strong className="yellow">MERN Fullstack Dev</strong> <strong className="green">BootCamp program from GUVI (IIT Incubated EdTech) to Upskill Myself in web developement.</strong>
          <br/><br/> Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> FPS Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
