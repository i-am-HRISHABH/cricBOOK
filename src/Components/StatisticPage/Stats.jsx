import React from "react";
import "./Stats.css";

// const ploya = [
//   {
//     id: 0,
//     name: "rohit sharma",
//     runs_made: 0,
//     balls_face: 0,
//     fours: 0,
//     sixes: 0,
//     out: false,
//     dot_ball: 0,
//     strike_rate: 0,
//     overs: 0,
//     runs_given: 0,
//     wickets: 0,
//     economy: 0.0,
//   },
//   {
//     id: 1,
//     name: "shikhar dhawan",
//     runs_made: 0,
//     balls_face: 0,
//     fours: 0,
//     sixes: 0,
//     out: false,
//     dot_ball: 0,
//     strike_rate: 0.0,
//     overs: 0,
//     runs_given: 0,
//     wickets: 0,
//     economy: 0.0,
//   },
//   {
//     id: 2,
//     name: "virat kohli",
//     runs_made: 0,
//     balls_face: 0,
//     fours: 0,
//     sixes: 0,
//     out: false,
//     dot_ball: 0,
//     strike_rate: 0.0,
//     overs: 0,
//     runs_given: 0,
//     wickets: 0,
//     economy: 0.0,
//   },
//   {
//     id: 3,
//     name: "kl rahul",
//     runs_made: 0,
//     balls_face: 0,
//     fours: 0,
//     sixes: 0,
//     out: false,
//     dot_ball: 0,
//     strike_rate: 0.0,
//     overs: 0,
//     runs_given: 0,
//     wickets: 0,
//     economy: 0.0,
//   },
//   {
//     id: 4,
//     name: "rishabh pant",
//     runs_made: 0,
//     balls_face: 0,
//     fours: 0,
//     sixes: 0,
//     out: false,
//     dot_ball: 0,
//     strike_rate: 0.0,
//     overs: 0,
//     runs_given: 0,
//     wickets: 0,
//     economy: 0.0,
//   },
//   {
//     id: 5,
//     name: "dinesh karthik",
//     runs_made: 0,
//     balls_face: 0,
//     fours: 0,
//     sixes: 0,
//     out: false,
//     dot_ball: 0,
//     strike_rate: 0.0,
//     overs: 0,
//     runs_given: 0,
//     wickets: 0,
//     economy: 0.0,
//   },
//   {
//     id: 6,
//     name: "ravindra jadeja",
//     runs_made: 0,
//     balls_face: 0,
//     fours: 0,
//     sixes: 0,
//     out: false,
//     dot_ball: 0,
//     strike_rate: 0.0,
//     overs: 0,
//     runs_given: 0,
//     wickets: 0,
//     economy: 0.0,
//   },
//   {
//     id: 7,
//     name: "ravi ashwin",
//     runs_made: 0,
//     balls_face: 0,
//     fours: 0,
//     sixes: 0,
//     out: false,
//     dot_ball: 0,
//     strike_rate: 0.0,
//     overs: 0,
//     runs_given: 0,
//     wickets: 0,
//     economy: 0.0,
//   },
//   {
//     id: 8,
//     name: "deepak chahar",
//     runs_made: 0,
//     balls_face: 0,
//     fours: 0,
//     sixes: 0,
//     out: false,
//     dot_ball: 0,
//     strike_rate: 0.0,
//     overs: 0,
//     runs_given: 0,
//     wickets: 0,
//     economy: 0.0,
//   },
//   {
//     id: 9,
//     name: "mohammad shami",
//     runs_made: 0,
//     balls_face: 0,
//     fours: 0,
//     sixes: 0,
//     out: false,
//     dot_ball: 0,
//     strike_rate: 0.0,
//     overs: 0,
//     runs_given: 0,
//     wickets: 0,
//     economy: 0.0,
//   },
//   {
//     id: 10,
//     name: "jaspree bumrah",
//     runs_made: 0,
//     balls_face: 0,
//     fours: 0,
//     sixes: 0,
//     out: false,
//     dot_ball: 0,
//     strike_rate: 0.0,
//     overs: 0,
//     runs_given: 0,
//     wickets: 0,
//     economy: 0.0,
//   },
// ];

const Stats = (props) => {
  const theTeam = props.team;
  const footerString =
    props.resultObject.result === "WON"
      ? "You won the match"
      : "you lost the match";
  return (
    <div className="st-wrapper">
      <div className="st-heading">Batting Statistics</div>
      <div className="st-bat-stats">
        <div
          className="st-bat-item-box"
          style={{
            background: "var(--pinkred)",
            color: "white",
            marginBottom: "1rem",
          }}
        >
          <div className="st-no">sno</div>
          <div className="st-name">Player</div>
          <div className="st-run">Runs</div>
          <div className="st-ball">Balls</div>
          <div className="st-four">4s</div>
          <div className="st-six">6s</div>
          <div className="st-dot">Dots</div>
          <div className="st-strike">Strik-Rate</div>
          <div className="st-status">Status</div>
        </div>
        {theTeam.map((p) => {
          return (
            <div className="st-bat-item-box">
              <div className="st-no">#{p.id + 1}</div>
              <div className="st-name" style={{ color: "var(--darkblue)" }}>
                {p.name.toUpperCase()}
              </div>
              <div className="st-run">{p.runs_made}</div>
              <div className="st-ball">{p.balls_face}</div>
              <div className="st-four">{p.fours}</div>
              <div className="st-six">{p.sixes}</div>
              <div className="st-dot">{p.dot_ball}</div>
              <div className="st-strike">
                {Math.round((p.runs_made / p.balls_face) * 100)
                  ? Math.round((p.runs_made / p.balls_face) * 100)
                  : 0}
              </div>
              <div className="st-status">
                {p.balls_face == 0 ? "DNB" : p.out ? "out" : "not out"}
              </div>
            </div>
          );
        })}
      </div>
      <div className="st-heading">Bowling Statistics</div>
      <div className="st-bat-stats">
        <div
          className="st-bowl-item-box"
          style={{
            background: "var(--pinkred)",
            color: "white",
            marginBottom: "1rem",
          }}
        >
          <div className="st-bno">sno</div>
          <div className="st-bname">Player</div>
          <div className="st-bover">Overs</div>
          <div className="st-bwicket">Wickets</div>
          <div className="st-bruns">Runs</div>
          <div className="st-beconomy">Economy</div>
          <div className="st-bstatus">Status</div>
        </div>
        {theTeam.map((p) => {
          return (
            <div className="st-bowl-item-box">
              <div className="st-bno">#{p.id + 1}</div>
              <div className="st-bname" style={{ color: "var(--darkblue)" }}>
                {p.name.toUpperCase()}
              </div>
              <div className="st-bover">
                {p.overs}.{p.balls_bowled % 6}
              </div>
              <div className="st-bwicket">{p.wickets}</div>
              <div className="st-bruns">{p.runs_given}</div>
              <div className="st-beconomy">
                {Math.round(p.runs_given / (p.balls_bowled / 6))
                  ? Math.round(p.runs_given / (p.balls_bowled / 6))
                  : 0}
              </div>
              <div className="st-bstatus">
                {p.balls_bowled > 0 ? "bowled" : "DNB"}
              </div>
            </div>
          );
        })}
      </div>
      <div className="st-footer">{footerString}</div>
    </div>
  );
};

export default Stats;
