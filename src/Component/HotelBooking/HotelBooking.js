import React from 'react';
import "./HotelBooking.css";
import Navbar from '../Navbar/Navbar';
import star from '../../image/star_1_.png'

const HotelBooking = () => {
    return (
        <div className="hotel-booking">
            <Navbar></Navbar>
            <p><small>252 stays Apr 13-17 3 guests</small></p>
            <h4>Stay in Cox’s Bazar(dynamic)</h4>
            <div className="hotel-booking-container">
                <div className="hotel-content-container">
                <div className="hotel-content">
                    <img className="hotel-image" src="https://i.ibb.co/kgTx2qW/Rectangle-26.png" alt="hotel"/>
                    <div className="hotel-detail">
                        <h6>Light bright airy stylish apt & safe peaceful stay</h6>
                        <p><small><span>4 </span>Guest &nbsp;<span> 2 </span>Bedrooms &nbsp;<span> 2 </span> Beds &nbsp;<span> 2 </span> Baths</small></p>
                        <p><small>Wif Air conditioning Kitchen</small></p>
                        <p><small>Cancellation fexibility availiable</small></p>
                        <p><small><img className="star" src={star} alt="star"/><span>4.8(20)</span> <span className="hotel-price">$34/night</span></small></p>
                    </div>
                </div>

                <div className="hotel-content">
                    <img className="hotel-image" src="https://i.ibb.co/kgTx2qW/Rectangle-26.png" alt="hotel"/>
                    <div className="hotel-detail">
                        <h6>Light bright airy stylish apt & safe peaceful stay</h6>
                        <p><small><span>4 </span>Guest &nbsp;<span> 2 </span>Bedrooms &nbsp;<span> 2 </span> Beds &nbsp;<span> 2 </span> Baths</small></p>
                        <p><small>Wif Air conditioning Kitchen</small></p>
                        <p><small>Cancellation fexibility availiable</small></p>
                        <p><small><img className="star" src={star} alt="star"/><span>4.8(20)</span> <span className="hotel-price">$34/night</span></small></p>
                    </div>
                </div>

                <div className="hotel-content">
                    <img className="hotel-image" src="https://i.ibb.co/kgTx2qW/Rectangle-26.png" alt="hotel"/>
                    <div className="hotel-detail">
                        <h6>Light bright airy stylish apt & safe peaceful stay</h6>
                        <p><small><span>4 </span>Guest &nbsp;<span> 2 </span>Bedrooms &nbsp;<span> 2 </span> Beds &nbsp;<span> 2 </span> Baths</small></p>
                        <p><small>Wif Air conditioning Kitchen</small></p>
                        <p><small>Cancellation fexibility availiable</small></p>
                        <p><small><img className="star" src={star} alt="star"/><span>4.8(20)</span> <span className="hotel-price">$34/night</span></small></p>
                    </div>
                </div>
                </div>
                <div className="travel-map">

                </div>
            </div>
        </div>
    );
};

export default HotelBooking;