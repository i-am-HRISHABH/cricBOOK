import React from "react";
import "./CurrentBowler.css";

const CurrentBowler = (props) => {
  const overGhatna = props.currentOver;
  const econ = Math.round(
    props.currentBowler.runs_given / (props.currentBowler.balls_bowled / 6)
  );
  console.log("economy is: " + econ);
  return (
    <div className="cbl-wrapper">
      <div className="cbl-name">{props.currentBowler.name}</div>
      <div className="cbl-over">
        {overGhatna.map((e) => {
          return <div className="cbl-ball">{e}</div>;
        })}
      </div>
      <div className="cbl-lower">
        <div className="cbl-lower-stat">
          <div>
            Over: <span> {props.currentBowler.overs} </span>
          </div>
          <div>
            Run: <span> {props.currentBowler.runs_given}</span>
          </div>
        </div>
        <div className="cbl-lower-middle">
          {props.runball.runs}({props.runball.balls})
        </div>
        <div className="cbl-lower-stat">
          <div>
            Economy : <span>{econ}</span>
          </div>
          <div>
            Wicket : <span>{props.currentBowler.wickets}</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentBowler;
