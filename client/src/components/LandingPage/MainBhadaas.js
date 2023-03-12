import React from "react";
import "./LandingPage.css";
import "./MainBhadaas.css";
import LikeButton from "../Miscellanous/LikeButton";

function MainBhadaas() {
  return (
    <div className="mainbhadaas">
      <div className="mainbhadaas-container">
        <h1 className="bhadaas-text">Lorem Ipsum ki Maa ko Pranam! 🙄</h1>
        <div className="flex bhadaas-body">
          <LikeButton count={34} />
          <p className="info bhadaas-info">*They paid us to display this</p>
        </div>
      </div>
    </div>
  );
}

export default MainBhadaas;
