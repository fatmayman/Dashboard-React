import React from "react";
import "./WelcomeSection.css";

export default function WelcomeSection() {
  return (
    <div className="welcome">
      <div className="user-avatar1">MO</div>
      <div className="user-info">
        <h5>Hi there,</h5>
        <span className="username2">Morgan Oakley (@morgan)</span>
      </div>
      <div className="wlc-btn">
        <button className="btn-diff">New</button>
        <button className="btn-diff1">Upload</button>
        <button className="btn-diff1">Share</button>
      </div>
    </div>
  );
}
