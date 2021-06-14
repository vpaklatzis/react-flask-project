import React from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/CardStyles.css';

const ImageCard = ({ image, deleteImage }) => {
    return (
        <Card 
            className="text-white"
            id="card"
        >
            <Card.Img src={image.urls.small} />
            <Card.ImgOverlay>
                <span
                    onClick={() => deleteImage(image.id)}
                    id="close-button"
                >
                    &times;
                </span>
                <Card.Title>{image.title}</Card.Title>
                <Card.Text>{image.description || image.alt_description} </Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
};

export default ImageCard;