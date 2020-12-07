import { Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { HappyTravel } from '../../App';
import logo from "../../image/Logo.png";
import "./Navbar.css";
import firebase from "firebase/app";
import "firebase/auth";

const Navbar = () => {
    const [travelInfo, setTravelInfo] = useContext(HappyTravel);

    const handleSignOut = () => {
        firebase.auth().signOut().then(function() {
            setTravelInfo({...travelInfo,
               isSignedIn: false,
               displayName: ""});
          }).catch(function(error) {
              console.log(error)
          });
      }
     return (
        <div className="navbar">
            <img className="nav-logo" src={logo} alt=""/>
            <ul className="nav-collection">
                <li className="nav-item">News</li>
                <li className="nav-item">Destination</li>
                <li className="nav-item">Blog</li>
                <li className="nav-item">Contact</li>
                {travelInfo.isSignedIn ? 
                <li>
                   <Button onClick={handleSignOut} className="nav-btn" variant="contained" color="secondary">Log Out</Button>
                </li>
                : <li>
                <Link to="/login">
                    <Button className="nav-btn" variant="contained" color="secondary">Login</Button>
                </Link>
                </li>
                }
                <li className="nav-item nav-person">{travelInfo.displayName}</li>
            </ul>
        </div>
    );
};

export default Navbar;