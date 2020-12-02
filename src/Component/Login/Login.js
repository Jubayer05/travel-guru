import { Button, Checkbox, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import facebook from "../../image/fb.png";
import google from "../../image/google.png";
import "./Login.css";

const Login = () => {
    const [toggle, setToggle] = useState(false);
    const [checked, setChecked] = React.useState(true);

    const handleChange = (e) => {
        setChecked(e.target.checked);
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="login-container">
                { toggle ? 
                <div className="login-content">
                    <h3>Login</h3>
                    <TextField className="textarea" id="standard-basic" color="Secondary" label="Username or Email" /> <br/>
                    <TextField className="textarea" id="standard-basic" label="Password" />
                    <div className="login-remember">
                        <div>
                            <Checkbox color="default" checked={checked} 
                            onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/>
                            Remember Me
                        </div>
                        <p>Forgot password</p>
                    </div>
                    <Button className="login-btn" variant="contained" color="secondary">Login</Button>
                    <p className="login-account">Don't have an account? <a href="#facebook" className="" onClick={() => setToggle(!toggle)}>Create an account</a></p>
                </div>
:
                <div className="login-content">
                    <h3>Create a new account</h3>
                    <TextField className="textarea" id="standard-basic" label="First Name" />
                    <TextField className="textarea" id="standard-basic" label="Last Name" />
                    <TextField className="textarea" id="standard-basic" color="Secondary" label="Username or Email" /> <br/>
                    <TextField className="textarea" id="standard-basic" label="Password" />
                    <TextField className="textarea" id="standard-basic" label="Confirm Password" />
                    <Button className="login-btn" variant="contained" color="secondary">Create an account</Button>
                    <p className="login-account">Already have an account? <a href="#facebook" className="" onClick={() => setToggle(!toggle)}>Login</a></p>
                </div>
            }
            </div>
                <p className="login-or"><div></div><span>Or</span><div></div></p>
                <div className="login-with">
                    <img className="login-image" src={facebook} alt="Facebook"/>
                    <p>Login with Facebook</p>
                    <div></div>
                </div>
                <div className="login-with">
                    <img className="login-image" src={google} alt="Facebook"/>
                    <p>Login with Google</p>
                    <div></div>
                </div>
        </div>
    );
};

export default Login;