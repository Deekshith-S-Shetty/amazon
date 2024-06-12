import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-block">
        <h4>Get to Know Us</h4>
        <p>Careers</p>
        <p>Blog</p>
        <p>About Amazon</p>
      </div>
      <div className="footer-block">
        <h4>Make Money with Us</h4>
        <p>Sell on Amazon</p>
        <p>Become an Affiliate</p>
        <p>Advertise Your Product</p>
      </div>
      <div className="footer-block">
        <h4>Let Us Help You</h4>
        <p>Your Account</p>
        <p>Your Orders</p>
        <p>Return & Replacements</p>
      </div>
    </div>
  );
}
