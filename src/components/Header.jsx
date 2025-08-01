import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search..." className="search-text" />
      </div>

      <div className="btn-header">
        <button className="bell"><i className="fa-regular fa-bell"></i></button>
      </div>

      <div className="user-profile">
        <div className="user-avatar">MO</div>
        <span className="user-name">Morgan Oakley</span>
      </div>
    </div>
  );
}
