import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="dashboard">
      <div className="sidebar-header">
        <i className="fas fa-th-large"></i>
        <h2>Dashboard</h2>
      </div>

      <ul className="sidebar-menu">
        <li><a href="#" className="active"><i className="fas fa-home"></i> Home</a></li>
        <li><a href="#"><i className="fas fa-user"></i> Profile</a></li>
        <li><a href="#"><i className="fas fa-envelope"></i> Messages</a></li>
        <li><a href="#"><i className="fas fa-history"></i> History</a></li>
        <li><a href="#"><i className="fas fa-tasks"></i> Tasks</a></li>
        <li><a href="#"><i className="fas fa-users"></i> Communities</a></li>
        <li><a href="#"><i className="fas fa-cog"></i> Settings</a></li>
        <li><a href="#"><i className="fas fa-question-circle"></i> Support</a></li>
        <li><a href="#"><i className="fas fa-shield-alt"></i> Privacy</a></li>
      </ul>
    </div>
  );
}
