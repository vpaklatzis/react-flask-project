import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { ReactComponent as Logo } from "../media/logo.svg";
import { Container, Form } from "react-bootstrap";
import '../styles/HeaderStyles.css';

const Header = ({ title, word, setWord, handleSubmit }) => {
  return (
    <Navbar id="nav" variant="light">
      <Container id="container">
        <Logo id="logo" alt={title} />
        <Form onSubmit={handleSubmit} id="form">
          <Form.Control
            id="search" 
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="Search free unsplash photos"
          />
        </Form>
      </Container>
    </Navbar>
  );
};

export default Header;
