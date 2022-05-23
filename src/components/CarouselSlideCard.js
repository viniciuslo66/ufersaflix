import React,{Component} from 'react';
import carouselImg from '../assets/carroussel.jpg';

class CarouselSlideCard extends Component {
    render() {
        return(
            <div>
                <img src={carouselImg} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
        );
    }
}

export default CarouselSlideCard;