import React from "react";
import "./CurrentBatsman.css";

const CurrentBatsman = (props) => {
  const CurrentBatsmanSadow = {
    boxShadow: "-6px 7px 20px 0.5px rgba(0, 0, 0, 0.2)",
  };
  return (
    <div className="cb-wrapper" style={props.shadow ? CurrentBatsmanSadow : {}}>
      <div className="cb-name">{props.playerObj.name}</div>
      <p>
        {props.playerObj.runs_made}({props.playerObj.balls_face})
      </p>
      <div className="cb-stats">
        <div className="cb-stats-left">
          <p className="eat-margin">four: {props.playerObj.fours}</p>
          <p className="eat-margin">Six: {props.playerObj.sixes}</p>
        </div>
        <div className="cb-stats-right">
          <p className="eat-margin">dot balls: {props.playerObj.dot_ball}</p>
          <p className="eat-margin">
            Strike rate: {props.playerObj.strike_rate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentBatsman;
