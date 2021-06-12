import React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

const Search = ({ word, setWord, handleSubmit }) => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={8} sm={8} lg={7} xl={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col>
                <Form.Control 
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}  
                    placeholder="Search for a new image"  
                />
              </Col>
              <Col className="text-center">
                <Button className="mt-3" variant="primary" type="submit">Search</Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
};

export default Search;
