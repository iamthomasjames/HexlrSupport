import React, { useState, useEffect } from "react";
import "../../App.css";
import wave from "../../Assets/Images/Wave.svg";
const Info=()=> {
  const [hour, setHour] = useState(null);

  useEffect(() => {
    getHour();
  }, []);

  const getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    console.log(hour)
    setHour(hour);
  };
  return (
    <>
      <div className="info-container">
        <div>
      
          {hour <= 12 ? (
            <h1 className="grey-color" style={{ textAlign: "center" }}>Good Morning!!</h1>
          ) : hour > 12 && hour <= 17 ? (
            <h1 className="grey-color" style={{ textAlign: "center" }}>Good Afternoon!!</h1>
          ) : hour > 17 && hour <= 19 ? (
            <h1 className="grey-color" style={{ textAlign: "center" }}>Good Evening!!</h1>
          ) : (
            <h1 className="grey-color" style={{ textAlign: "center" }}>Good Night!!</h1>
          )}
          <p style={{ textAlign: "center" }}>
            We are providing service support to all our clients with minimum
            waiting. Once you submit your queries you will get a call back from
            our assosiates.
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
