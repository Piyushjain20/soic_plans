import React from "react";
import "./Card.css";
export default function Card() {
  return (
    <div className="card">
      <h2>Financial Literacy</h2>
      <p>For Beginners</p>
      <p>Features</p>
      <ul>
        <li>Create Your Own Financial Plan</li>
        <li>Nifty Wealth Creation</li>
        <li>Pick Your Own Mutual Funds</li>
        <li>Insurance</li>
        <li>Alternate Investments (Gold, Silver etc)</li>
      </ul>
      <div className="card--footer">
        <div className="price">INR 6,999 /yr</div>
        <div>
          <a>
            <button>Register Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}
