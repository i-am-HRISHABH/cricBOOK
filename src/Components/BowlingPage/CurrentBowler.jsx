import React from "react";
import "./CurrentBowler.css";

const CurrentBowler = (props) => {
  const overGhatna = props.currentOver;

  return (
    <div className="cbl-wrapper">
      <div className="cbl-name">{props.currentBowler.name}</div>
      <div className="cbl-over">
        {overGhatna.map((e) => {
          return <div className="cbl-ball">{e}</div>;
        })}
      </div>
      <div className="cbl-lower">
        <div className="cbl-lower-left">
          <div>Over: {props.currentBowler.overs}</div>
          <div>Run: {props.currentBowler.runs_given}</div>
        </div>
        <div className="cbl-lower-middle">11(5)</div>
        <div className="cbl-lower-right">
          <div>Economy : {props.currentBowler.economy}</div>
          <div>Wicket : {props.currentBowler.wickets}</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentBowler;
