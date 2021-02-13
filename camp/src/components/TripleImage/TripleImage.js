import React, { Component } from "react";
import { Container, Col, Row, Media } from "reactstrap";
import Image from "react-bootstrap/Image";
import backpackmanhome from "./backpackmanhome.png";
import tenthome from "./tenthome.jpg";
import sleepingbaghome from "./sleepingbaghome.jpg";
import "./TripleImage.css";
import { Link } from 'react-router-dom';
import ShopComponent from "../../pages/shop/ShopComponent";

function TripleImageComponent() {
  return (
    <div className="wrap">
      <div className="row">
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
      </div>
    </div>
  );
}

export default TripleImageComponent;