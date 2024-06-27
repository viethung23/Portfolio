import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import githubaction from "../../Assets/Projects/3.png";
import test from "../../Assets/Projects/test.png";
import net from "../../Assets/Projects/net.png";
import flutter from "../../Assets/Projects/flut.png";
import pbapi from "../../Assets/Projects/pbapi.png";
import tsd from "../../Assets/Projects/tsd2.jpg";

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
              imgPath={pbapi}
              isBlog={false}
              title="Perfect Breakfast WebAPI"
              description="Online Food Ordering and Traffic Management System built with .NET Core API, Redis, MySQL, Hangfire and deployed on Azure Cloud. The system features allow users to place food orders, make payments using bank transfers or Momo, and send notification emails to relevant parties."
              ghLink="https://github.com/PerfectBreakfast/PerfectBreakfastAPI"
              demoLink="https://perfect-breakfast-web.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flutter}
              isBlog={false}
              title="Delivery App"
              description="This is an application exclusively for delivery personnel within the P&B system. It allows them to view their task schedules and scan delivery QR codes. It is built using Flutter."
              ghLink="https://github.com/PerfectBreakfast/DeliveryStaff_app"           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tsd}
              isBlog={false}
              title="TSD Project"
              description="A system that allows customers and drivers to book and receive orders for goods transportation built with .NET Core API, React.js, and MS SQL, with features including map viewing, distance-based pricing, and refunds for unaccepted orders."
              ghLink="https://github.com/viethung23/TsdDelivery"
              demoLink="https://tsdproject.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={githubaction}
              isBlog={true}
              title="Self-hosted runner in the GitHub Action"
              description="Guide to using a Self-hosted runner for setting up a CI server, building a workflow to automatically build and push Docker images"
              ghLink="https://www.hocduthu.com/2024/05/self-hosted-runner-trong-github-action.html"
              demoLink="https://www.hocduthu.com/2024/05/self-hosted-runner-trong-github-action.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={net}
              isBlog={true}
              title="Deploy .NET code to an Ubuntu server"
              description="How to deploy .NET code to an Ubuntu server using a Dockerfile to build an image and manually push it to Docker Hub"
              ghLink="https://www.hocduthu.com/2024/05/trien-khai-ung-dung-net-len-server-thu.html"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={test}
              isBlog={true}
              title="Implement Unit Tests for the .NET project"
              description="Discuss the topic of unit testing that many students might overlook, and introduce how to set up and implement tests for a .NET project"
              ghLink="https://www.hocduthu.com/2024/05/unit-test-net.html"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
