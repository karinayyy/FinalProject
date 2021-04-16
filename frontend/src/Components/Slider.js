import React from 'react';
import { Carousel } from 'react-bootstrap';
import photo1 from '../images/s-1.jpg'
import photo2 from '../images/s-1.jpg'
import photo3 from '../images/s-1.jpg'
import photo4 from '../images/s-1.jpg'

export default function Slider(){
    return(
        <Carousel>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={photo1}
                    alt="First Slide"
                />
                <Carousel.Caption>
                    <h3>Heading</h3>
                    <p>Lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={photo2}
                    alt="First Slide"
                />
                <Carousel.Caption>
                    <h3>Heading</h3>
                    <p>Lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={photo3}
                    alt="First Slide"
                />
                <Carousel.Caption>
                    <h3>Heading</h3>
                    <p>Lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className="d-block w-100"
                    src={photo4}
                    alt="First Slide"
                />
                <Carousel.Caption>
                    <h3>Heading</h3>
                    <p>Lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}