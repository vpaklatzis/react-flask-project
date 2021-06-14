import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import ImageCard from './components/ImageCard';
import Welcome from "./components/Welcome";

import { Container, Row, Col } from 'react-bootstrap';

const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY; 

function App() {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
            setImages([{...data, title: word}, ...images]);
        })
        .catch((err) => {
            console.log(err);
        })

        setWord('');
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div>
      <Header title={"Images Gallery"} word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-5">
          {images.length ? 
            <Row xs={1} md={2} lg={3}>
                {images.map((image, i) => (
                    <Col key={i} className="pb-2">
                        <ImageCard image={image} deleteImage={handleDeleteImage} />
                    </Col>
                ))}
            </Row>
          :
          <Welcome />
        }
      </Container>
    </div>
  );
}

export default App;
