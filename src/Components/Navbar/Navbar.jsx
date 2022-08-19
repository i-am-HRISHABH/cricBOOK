import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">cricBOOK</div>
      <div className="n-right">
        <ul>
          <li>Setting</li>
          <li>Batting</li>
          <li>Bowling</li>
          <li>Stats</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
