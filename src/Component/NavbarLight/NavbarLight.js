import React from 'react';
import { Button } from '@material-ui/core';
import logo from "../../image/Logo.png";
import "../Navbar/Navbar.css";

const NavbarLight = () => {
    return (
        <div className="navbar navbar-light">
            <div className="nav-logo-white">
               
            </div>
            <input className="nav-search" type="text" name="search" id="search" placeholder="Search Travel Spot"/>
            <ul className="nav-collection">
                <li className="nav-item">News</li>
                <li className="nav-item">Destination</li>
                <li className="nav-item">Blog</li>
                <li className="nav-item">Contact</li>
                <li className="nav-item">
                <Button className="nav-btn" variant="contained" color="secondary">Login</Button>
                </li>
            </ul>
        </div>
    );
};

export default NavbarLight;