import React, { Component } from 'react';
import CarouselCard from './CarouselCard';

class CarouselContainer extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <CarouselCard />
                                <CarouselCard />
                                <CarouselCard />
                                <CarouselCard />
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <CarouselCard />
                                <CarouselCard />
                                <CarouselCard />
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default CarouselContainer;