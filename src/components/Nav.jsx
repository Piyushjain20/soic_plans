import React from "react";
import SOIC_logo from "../assets/soiclogolearnyst_r5jz9f.png";
import "./Nav.css";
export default function Nav() {
  return (
    <div className="header">
      <div className="logo__container">
        <img src={SOIC_logo} alt="SOIC Logo" className="logo" />
        <h5 className="logo__text">School of Intrinsic Compounding</h5>
      </div>
      <h1 className="title">SOIC MEMBERSHIP PLANS</h1>
    </div>
  );
}
