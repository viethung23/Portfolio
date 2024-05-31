import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiGit,
  DiJava,
  DiMsqlServer,
  DiJenkins 
} from "react-icons/di";
import {
  SiRedis,
  SiCsharp,
  SiDotnet,
  SiMysql,
  SiDart,
  SiDocker,
  SiMicrosoftazure,
  SiGithubactions
} from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDart />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiFlutterFill />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMsqlServer />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJenkins/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
      </Col>
    
    </Row>
  );
}

export default Techstack;
