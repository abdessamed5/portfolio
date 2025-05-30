import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abdessamed Feroun </span>
            from <span className="purple"> Algeria</span>
            <br />
            I am currently pursuing my Computer Science degree at USTHB.
            <br />
            I am passionate about web development and building innovative 
            software solutions that solve real-world problems.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Personal Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving & Algorithms
            </li>
            <li className="about-activity">
              <ImPointRight /> Gaming & Tech Reviews
            </li>
          </ul>
          
          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is like humor. When you have to explain it, it's bad!"{" "}
          </p>
          <footer className="blockquote-footer">Abdessamed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;