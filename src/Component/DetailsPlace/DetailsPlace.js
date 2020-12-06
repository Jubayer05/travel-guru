import { TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HappyTravel } from '../../App';
import NavbarLight from '../NavbarLight/NavbarLight';
import "./DetailPlace.css";

const DetailsPlace = () => {
    const [travelInfo, setTravelInfo] = useContext(HappyTravel);
    console.log(travelInfo);
    const {id} = useParams();
    var detailBackground = {
        backgroundImage : "url("+travelInfo.image+")",
        backgroundRepeat : "noRepeat",
    }
    return (
        <div style={detailBackground} className="detail">
            <div className="overlay">
            <NavbarLight></NavbarLight>
            <div className="detail-container">
                <div className="detail-content">
                    <h1 className="detail-heading">{travelInfo.name}</h1>
                    <p>{travelInfo.detail}</p>
                </div>
                <div className="detail-form">
                    <form action="">
                        <label className="detail-form__label">Origin</label>
                        <input className="detail-form__input" type="text" name="from-travel" id="from-travel"/>
                        <label className="detail-form__label">Destination</label>
                        <input className="detail-form__input" value={travelInfo.name} type="text" name="from-travel" id="from-travel"/>
                        <div className="detail-calender">
                            <div className="calender-segment">
                                <TextField id="date" label="From" type="date" className="detail-form__input calender-main" 
                                defaultValue="2020-12-05" InputLabelProps={{ shrink: true,}}/>
                            </div>
                            <div className="calender-segment">
                                <TextField id="date" label="To" type="date" className="detail-form__input calender-main"
                                 defaultValue="2020-12-10" InputLabelProps={{ shrink: true,}}/>
                            </div>
                        </div>
                        <Link to="/booking">
                            <button className="detail-btn">Start Booking</button>
                         </Link>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DetailsPlace;