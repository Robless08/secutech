import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="Ash">
      <div className="welcome">
        <p className="well">Welcome to Our Security System <br/>SECUTECH</p>
        <p className="sec">Secure your Company with RFID Technology</p>
        <div className="rfid-card">
          <div className="chip"></div>
          <div className="wave"></div>
        </div>
        <button className="pointers">
          <Link to="/Signin">Get Started</Link>
        </button>
      </div>
    </div>
   
  
  );
}

export default Welcome;