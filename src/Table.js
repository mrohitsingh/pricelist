import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import "./App.css";

function Table() {
  return (
    <>
      <Container className="p-5 ">
        <h3 className="pb-2 ">Price List</h3>
        <Row>
          <Col className="p-3" lg md sm={12} xs={12}>
            <Card>
              <Card.Header as="h5">Personal</Card.Header>
              <Card.Body>
                <Card.Title>Free</Card.Title>
                <Card.Text>
                  <FaCheckCircle className="check" />
                  <b>15</b> Projects.
                </Card.Text>
                <Card.Text>
                  <FaCheckCircle className="check" />
                  <b>15</b> Projects.
                </Card.Text>
                <Card.Text>
                  <FaCheckCircle className="check" />
                  <b>15</b> Projects.
                </Card.Text>
                <Card.Text>
                  <FaCheckCircle className="check" />
                  <b>15</b> Projects.
                </Card.Text>
                <Card.Text className="text-muted">
                  <FaTimesCircle className="times" />
                  <b>15</b> Projects.
                </Card.Text>
                <Button>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-3" lg md sm={12} xs={12}>
            <Card>
              <Card.Header as="h5">Pro</Card.Header>
              <Card.Body>
                <Card.Title>$99.0/Month</Card.Title>
                <Card.Text>
                  <FaCheckCircle className="check" />
                  All Free items.
                </Card.Text>
                <Card.Text>
                  <FaCheckCircle className="check" />
                  <b>15</b> Projects.
                </Card.Text>
                <Card.Text>
                  <FaCheckCircle className="check" />
                  <b>15</b> Projects.
                </Card.Text>
                <Card.Text>
                  <FaCheckCircle className="check" />
                  <b>15</b> Projects.
                </Card.Text>
                <Card.Text className="text-muted">
                  <FaTimesCircle className="times" />
                  <b>15</b> Projects.
                </Card.Text>
                <Button>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-3" lg md sm={12} xs={12}>
            <Card>
              <Card.Header as="h5">Organization</Card.Header>
              <Card.Body>
                <Card.Title>$199.0/Month</Card.Title>
                <Card.Text>
                  <FaCheckCircle className="check" />
                  All Pro Items.
                </Card.Text>
                <Card.Text>
                  <FaCheckCircle className="check" />
                  <b>15</b> Projects.
                </Card.Text>
                <Card.Text>
                  <FaCheckCircle className="check" />
                  <b>15</b> Projects.
                </Card.Text>
                <Card.Text>
                  <FaCheckCircle className="check" />
                  <b>15</b> Projects.
                </Card.Text>
                <Card.Text className="text-muted">
                  <FaTimesCircle className="times" />
                  <b>15</b> Projects.
                </Card.Text>
                <Button>Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Table;
