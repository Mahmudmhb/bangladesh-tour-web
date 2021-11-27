import React from 'react';
import './slider.css'

const Slider = () => {
    return (
        <div className="slider">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://as2.ftcdn.net/v2/jpg/04/44/12/07/500_F_444120713_1wLaAkj8lNW5Dijxb5foPDQbHdBBRjnU.jpg" className="d-block  w-100" height="500vh" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://as1.ftcdn.net/v2/jpg/02/21/56/00/500_F_221560054_3AUHKtfVCOL6CaB2BiTgMcaaLMnHmUEf.jpg" className="d-block w-100" height="500vh" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://as2.ftcdn.net/v2/jpg/04/66/04/41/500_F_466044118_wrVNvSWaMZFxiR2kUcaup5wd8Sv4vVl0.jpg" className="d-block  w-100" height="500vh" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;