import React from "react";
import "./RightSidebar.css";

export default function RightSidebar() {
  return (
    <div className="right-sidebar">
      {/* Announcements */}
      <div className="side announc-part">
        <h3>Announcements</h3>
        <div>
          <h4>Site Maintenance</h4>
          <p>Vestibulum condimentum tellus lacus, in accumsan elit maximus ac...</p>
        </div>
        <div>
          <h4>Community Share Day</h4>
          <p>Nam vel lectus tincidunt, rutrum nulla eu, ornare libero...</p>
        </div>
        <div>
          <h4>Updated Privacy Policy</h4>
          <p>Phasellus efficitur nisi eget elit consectetur, eget condimentum ante...</p>
        </div>
      </div>

      {/* Trending */}
      <div className="side trend-part">
        <h3>Trending</h3>

        {[
          { avatar: "T", username: "@tegan", desc: "World Peace Builder", className: "user-avatar3" },
          { avatar: "M", username: "@morgan", desc: "Super Cool Project", className: "user-avatar4" },
          { avatar: "K", username: "@kendall", desc: "Life Changing App", className: "user-avatar5" },
          { avatar: "A", username: "@alex", desc: "No Traffic Maker", className: "user-avatar6" },
        ].map((item, index) => (
          <div className="trend-item" key={index}>
            <div className={`user-avatar-trend ${item.className}`}>{item.avatar}</div>
            <div className="trend-info">
              <div className="username">{item.username}</div>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
