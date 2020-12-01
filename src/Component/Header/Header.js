import React, { useContext, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';
import { HappyTravel } from '../../App';
import TravelPlace from '../../fakedata/TravelPlace';
import Navbar from '../Navbar/Navbar';
import "./Header.css";


const Header = () => {
   const [foodInfo, setFoodInfo] = useContext(HappyTravel)
    return (
        <>
        
        <Navbar></Navbar>
        <Carousel>
            {
            TravelPlace.map(item => 
            <Carousel.Item className="carousel-item" key={item.id}>
            <img
            className="d-block w-100 carousel-img"
            src={item.image}
            alt="Third slide"
            />
            
            <Carousel.Caption>
            <h3 className="carousel-title">{item.name}</h3>
            <p>{item.detail}</p>
            <Link onClick={() => setFoodInfo(item)} to={'/viewDetail/'+item.id}>Learn More</Link>
                </Carousel.Caption>
            </Carousel.Item>)
            }
        </Carousel>
        </>
    );
};
export default Header;