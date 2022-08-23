import React from "react";
import "./Navbar.css";

function Navbar(props) {
  const index = props.index;
  const selectedStyle = {
    color: "var(--pinkred)",
    borderBottom: "4px solid var(--pinkred)",
  };
  return (
    <div className="n-wrapper">
      <div className="n-left">cricBOOK</div>
      <div className="n-right">
        <ul>
          <li style={index === 0 ? selectedStyle : {}}>Setting</li>
          <li style={index === 1 ? selectedStyle : {}}>Batting</li>
          <li style={index === 2 ? selectedStyle : {}}>Bowling</li>
          <li style={index === 3 ? selectedStyle : {}}>Stats</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
