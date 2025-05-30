import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Web USTHB Project"
              description="A comprehensive web application developed for USTHB university. Built with modern web technologies including HTML, CSS, JavaScript, and backend integration. Features responsive design and user-friendly interface for university-related functionalities."
              ghLink="https://github.com/abdessamed5/web-USTHB"
              // demoLink="https://your-demo-link.com" // Add if you have a live demo
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;