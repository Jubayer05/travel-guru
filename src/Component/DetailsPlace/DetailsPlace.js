import { TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { HappyTravel } from '../../App';
import "./DetailPlace.css";

const DetailsPlace = () => {
    const [foodInfo, setFoodInfo] = useContext(HappyTravel);
    console.log(foodInfo);
    const {id} = useParams();
    var detailBackground = {
        backgroundImage : "url("+foodInfo.image+")",
        backgroundRepeat : "noRepeat",
    }
    return (
        <div style={detailBackground} className="detail">
            <div className="overlay">
            <div className="detail-container">
                <div className="detail-content">
                    <h1 className="detail-heading">{foodInfo.name}</h1>
                    <p>{foodInfo.detail}</p>
                </div>
                <div className="detail-form">
                    <form action="">
                        <label className="detail-form__label">Origin</label>
                        <input className="detail-form__input" type="text" name="from-travel" id="from-travel"/>
                        <label className="detail-form__label">Destination</label>
                        <input className="detail-form__input" value={foodInfo.name} type="text" name="from-travel" id="from-travel"/>
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
                        <button className="detail-btn">Start Booking</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default DetailsPlace;