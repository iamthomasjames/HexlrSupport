import React, { useState, useEffect } from "react";
import "../../App.css";
import wave from "../../Assets/Images/Wave.svg";
import {
  Link
} from "react-router-dom";
const Info=()=> {
 const hour = new Date();
  return (
    <>
      <div className="info-container">
        <div>
          
          {hour.getHours() <= 12 ? (
            <h1 className="grey-color" style={{ textAlign: "center" }}>Good Morning!!</h1>
          ) : hour.getHours() > 12 && hour.getHours() <= 17 ? (
            <h1 className="grey-color" style={{ textAlign: "center" }}>Good Afternoon!!</h1>
          ) : hour.getHours() > 17 && hour.getHours() <= 19 ? (
            <h1 className="grey-color" style={{ textAlign: "center" }}>Good Evening!!</h1>
          ) : (
            <h1 className="grey-color" style={{ textAlign: "center" }}>Good Night!!</h1>
          )}
          <p style={{ textAlign: "center" }}>
            We are providing service support to all our clients with minimum
            waiting. Once you submit your queries you will get a call back from
            our  <Link to="/bill" style={{color:"black"}}>assosiates.</Link>
          </p>
        </div>
      </div>
      <img
        src={wave}
        width="100%"
        height="60px"
        style={{ zIndex: 1, position: "relative", top: -30 }}
        alt=""
      />
    </>
  );
}
export default Info;
