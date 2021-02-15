import React, { Component } from "react";
import backpackmanhome from "../../assets/images/backpackmanhome.png";
import tenthome from "../../assets/images/tenthome.jpg";
import sleepingbaghome from "../../assets/images/sleepingbaghome.jpg";
import "./TrippleImage.css";
import { Link } from 'react-router-dom';
import ShopComponent from "../../pages/shop/ShopComponent";

function TripleImageComponent() {
  return (
    <>
      <Link to="/shop">
        <div className="column">
        <div className="imgWrap">
          <img src={backpackmanhome} alt="backpack" />
          <div className="centered">Backpacks</div>
          </div>
        </div>
        <div className="column">
          <div className="imgWrap">
            <img src={tenthome} alt="tent" />
            <div className="centered">Tents</div>
          </div>
        </div>
        <div className="column">
        <div className="imgWrap">
          <img src={sleepingbaghome} alt="sleepingbag" />
          <div className="centered">Sleeping Bags</div>
        </div>
        </div>
        </Link>
    </>
  );
}

export default TripleImageComponent;
