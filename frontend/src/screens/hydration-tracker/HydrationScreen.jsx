import React from "react";
import Navbar from "../../components/Navbar";
import "./HydrationScreen.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const HydrationScreen = () => {

  let weight = 0;

  return (

    

    <>
      <Navbar />
      {weight ? <>      <div className='ht-container'>
        <div className='ht-box'>
          <h1>HYDRATION TRACKER</h1>
          <div className='ht-content-container'>
            <div
              style={{
                width: "13vw",
                height: "fit-content",
                marginLeft: "2vw",
              }}
            >
              <CircularProgressbar
                value={12}
                strokeWidth={5}
                text={`12%`}
                styles={buildStyles({
                  textSize: "15px",
                  textColor: "#000",
                  trailColor: "#d6d6d6",
                  pathColor: "#63CAEC",
                })}
              />
            </div>
            <div className='ht-right'>
              <p style={{ textAlign: "center" }}>
                <span style={{ opacity: "0.3", zIndex: "0" }}>2500ml</span> ~ 4000ml
              </p>
              <div className='ht-btns'>
                <div className='ht-btn'>100ml</div>
                <div className='ht-btn'>120ml</div>
                <div className='ht-btn'>200ml</div>
                <div className='ht-btn'>500ml</div>
              </div>
            </div>
          </div>
        </div>
      </div></> : <div className="ht-weight-container">
        <div className="ht-weight-box">
          <h1 style={{ textAlign: "center" }}>Weight</h1>
          <input type="text" className="ht-input-weight" />
        </div>
      </div> }

    </>
  );
};

export default HydrationScreen;
