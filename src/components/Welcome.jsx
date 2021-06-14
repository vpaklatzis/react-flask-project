import React from "react";
import { Container, Media } from "react-bootstrap";
import { ReactComponent as Photo } from "../media/photo.svg";
import "../styles/WelcomeStyles.css";


const Welcome = () => {
  return (
      <Container id="container">
          <Media>
            <Media.Body>
                <h5>Media Heading</h5>
            </Media.Body>
            <Photo style={{ maxWidth: "50rem" }} />
          </Media>
      </Container>
  )
};

export default Welcome;
