import React from "react";
import { Container, Row } from "react-bootstrap";
import CardMain from "./CardMain";
import "./Wrapper.css";

function Wrapper() {
  return (
    <Container fluid>
      <Row>
        <div className="flexed col px-2 mt-5 wrapper">
          <CardMain />
        </div>
      </Row>
    </Container>
  );
}

export default Wrapper;
