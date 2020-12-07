import { Button, Checkbox, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import facebook from "../../image/fb.png";
import google from "../../image/google.png";
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { HappyTravel } from '../../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [travelInfo, setTravelInfo] = useContext(HappyTravel);
    const [toggle, setToggle] = useState(false);
    const [checked, setChecked] = React.useState(true);
    const [userInfo, setUserInfo] = useState({
        isSignedIn: false,
        displayName: "",
        email: ""
    });

    const handleChange = (e) => {
        setChecked(e.target.checked);
    }
    // Handle Create Account in firebase start
    const handleBlur = (e) => {
        if(e.target.name === "firstName") {
            userInfo[e.target.name] = e.target.value;
        } 
        if(e.target.name === "lastName") {
            userInfo[e.target.name] = e.target.value;
        } 
        if(e.target.name === "email") {
            if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e.target.value)) {
                userInfo[e.target.name] = e.target.value;
            }
        } 
        if(e.target.name === "password") {
            if(e.target.value.length >= 6) {
                userInfo[e.target.name] = e.target.value;
            }
        }
        if(e.target.name === "confirmPassword") {
            userInfo[e.target.name] = e.target.value;
        }
        // console.log(e.target.value);
        console.log(userInfo);
        e.preventDefault();
    }

    const handleCreateAccount = (e) => {
    if(userInfo.password === userInfo.confirmPassword) {
    firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
  .then((user) => {
    var userNames = firebase.auth().currentUser;
    userNames.updateProfile({
    displayName: userInfo.firstName + ' ' + userInfo.lastName,
    email: userInfo.email
    }).then(function() {
    // Update successful.
    }).catch(function(error) {
    // An error happened.
    });
    setTravelInfo({...travelInfo, 
        isSignedIn: true,
        displayName: userInfo.firstName + ' ' + userInfo.lastName
    })
  })
  .catch((error) => {
    var errorMessage = error.message;
  });
  setUserInfo({...userInfo, passwordNotMatch: ""})
  e.preventDefault();
}
else {
    setUserInfo({...userInfo, passwordNotMatch: "Password Not Match"})
}
}
    // Handle Create Account in firebase End

    // Handle Sign In Start
    const handleSignIn = (e) => {
    firebase.auth().signInWithEmailAndPassword(userInfo.email, userInfo.password)
   .then((user) => {
       console.log(user)
        setTravelInfo({...travelInfo, 
            isSignedIn: true,
            displayName: user.user.displayName,})
   })
   .catch((error) => {
    var errorMessage = error.message;
    console.log(errorMessage);
   });

e.preventDefault();
    }
    // Handle Sign In End

    // Handle Google Sign In Start
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = (e) => {
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const userName = result.user.displayName;
                setTravelInfo({...travelInfo, 
                    isSignedIn: true,
                    displayName: userName,
                })
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
        e.preventDefault();
    }
    // Handle Google Sign In End
    // Handle Facebook Sign In Start
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleFacebookSignIn= (e) => {
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            const user = result.user;
            console.log(user);
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log("fbError: ",errorMessage);
          });
        e.preventDefault();
    }
    // Handle Facebook Sign In End

    return (
        <div className="login-form">
            <Navbar></Navbar>
            <div className="login-container">
                { toggle ? 
                <div className="login-content">
                    <h3>Login</h3>
                    <TextField onBlur={handleBlur} className="textarea" name="email" id="standard-basic" color="Secondary" label="Username or Email" /> <br/>
                    <TextField onBlur={handleBlur} className="textarea" name="password" id="standard-basic" color="Secondary" label="Password" />
                    <div className="login-remember">
                        <div>
                            <Checkbox color="default" checked={checked} 
                            onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }}/>
                            Remember Me
                        </div>
                        <p>Forgot password</p>
                    </div>
                    <Button onClick={handleSignIn} className="login-btn" variant="contained" color="secondary">Login</Button>
                    <p className="login-account">Don't have an account? <a href="#facebook" className="" onClick={() => setToggle(!toggle)}>Create an account</a></p>
                </div>
:
                <div className="login-content">
                    <h3>Create a new account</h3>
                    <p>{userInfo.passwordNotMatch}</p>
                    <TextField onBlur={handleBlur} className="textarea" name="firstName" id="standard-basic" color="Secondary" label="First Name" />
                    <TextField onBlur={handleBlur} className="textarea" name="lastName" id="standard-basic" color="Secondary" label="Last Name" />
                    <TextField onBlur={handleBlur} className="textarea" name="email" id="standard-basic" color="Secondary" label="Username or Email" /> <br/>
                    <TextField onBlur={handleBlur} className="textarea" name="password" id="standard-basic" color="Secondary" label="Password" />
                    <TextField onBlur={handleBlur} className="textarea" name="confirmPassword" id="standard-basic" color="Secondary" label="Confirm Password" />
                    <Button onClick={handleCreateAccount} className="login-btn" variant="contained" color="secondary">Create an account</Button>
                    <p className="login-account">Already have an account? <a href="#facebook" className="" onClick={() => setToggle(!toggle)}>Login</a></p>
                </div>
            }
            </div>
                <p className="login-or"><div></div><span>Or</span><div></div></p>
                <div onClick={handleFacebookSignIn} className="login-with">
                    <img className="login-image" src={facebook} alt="Facebook"/>
                    <p>Login with Facebook</p>
                    <div></div>
                </div>
                <div onClick={handleGoogleSignIn} className="login-with">
                    <img className="login-image" src={google} alt="Facebook"/>
                    <p>Login with Google</p>
                    <div></div>
                </div>
        </div>
    );
};

export default Login;