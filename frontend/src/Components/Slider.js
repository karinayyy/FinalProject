import React from 'react';
import { Carousel } from 'react-bootstrap';
import photo from '../images/s1.jpg'
import photo1 from '../images/s1.jpg'
import photo2 from '../images/s1.jpg'

export default function Slider(){
    return(
        <Carousel>
            <Carousel.Item style={{'height': '50vh'}}>
                <img 
                    className="d-block w-100"
                    src={photo}
                    alt="First Slide"
                />
                <Carousel.Caption>
                    <h3>Heading</h3>
                    <p>Lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '50vh'}}>
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
            <Carousel.Item style={{'height': '50vh'}}>
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
        </Carousel>
    )
}