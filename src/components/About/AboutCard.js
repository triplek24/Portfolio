import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Karthikeyan K </span>
            from <span className="purple"> Pudukkottai, India.</span>
            <br />
            <br></br> I am a Karthikeyan hard-working engineering graduate specializing in Computer Science Engineering. I have +1 years of experience in Elearning as an Online tutor and +6 months of experience in Guvi Institution as a MERN stack Learner.
            <br />
            I mainly work with the MERN stack but I have a profound knowledge of
            HTML & CSS, Javascript.
            <br />
            <br></br>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching Web series
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(255, 240, 0)" }}>
            "You are only Confined by the Walls you build Yourself "{" "}
          </p>
          <footer className="blockquote-footer">Andrew Murphy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
