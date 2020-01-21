import React, { Component } from 'react';

// Import react carousel library
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// import images from local folder 
import puppy1 from '../Images/puppy4.jpg';
import puppy2 from '../Images/puppy8.jpg';
import puppy3 from '../Images/puppy5.jpg';
 
class DogCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay infiniteLoop showThumbs={false}>
                <div>
                    <img src={puppy1} alt="Oops, doggo not found" />
                </div>
                <div>
                    <img src={puppy2} alt="Oops, doggo not found" />
                </div>
                <div>
                    <img src={puppy3} alt="Oops, doggo not found" />
                </div>
            </Carousel>
        );
    }
};

export default DogCarousel;
