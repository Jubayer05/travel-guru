import React, { useContext, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';
import { HappyTravel } from '../../App';
import TravelPlace from '../../fakedata/TravelPlace';
import NavbarLight from '../NavbarLight/NavbarLight';
import "./Header.css";


const Header = () => {
   const [travelInfo, setTravelInfo] = useContext(HappyTravel)
    return (
        <div className="header-container">
        
        <NavbarLight></NavbarLight>
            <span className="place-name place-name-1">Cox'x Bazar</span>
            <span className="place-name place-name-2">Srimongol</span>
            <span className="place-name place-name-3">Sundarbans</span>
        <Carousel>
            {
            TravelPlace.map(item => 
            <Carousel.Item className="carousel-item" key={item.id}>
            <div className="car-overlay">
                <img
                className="d-block w-100 carousel-img"
                src={item.image}
                alt="Third slide"
                />
            </div>
            
            <Carousel.Caption>
            <h3 className="carousel-title">{item.name}</h3>
            <p>{item.detail}</p>
            <Link onClick={() => setTravelInfo({...travelInfo, item})} to={'/viewDetail/'+item.id}>Learn More</Link>
                </Carousel.Caption>
            </Carousel.Item>)
            }
        </Carousel>
        </div>
    );
};
export default Header;