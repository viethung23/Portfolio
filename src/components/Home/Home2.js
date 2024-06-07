import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avata3.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm a recent graduate from
            <b className="purple"> FPT University </b>{" "} 
            with a degree in Software Engineering 🔥
              <br />
              <br />I've developed a strong foundation in software development, coding principles, and problem-solving skills, with a particular focus on
              <b className="purple"> .NET technologies </b>
              <br />
              <br />
              My interests lie in developing
              <b className="purple"> backend products, designing software architectures, </b>
              {" "}and also in areas related to{" "}
                <b className="purple">
                  DevOps.
              </b>
              <br />

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}
export default Home2;
