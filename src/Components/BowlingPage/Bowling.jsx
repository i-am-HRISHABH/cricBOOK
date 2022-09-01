import React from "react";
import "./Bowling.css";
import CurrentBowler from "./CurrentBowler";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventButton from "../EventButtons/EventButton";

const ploya = [
  {
    id: 0,
    name: "rohit sharma",
    runs_made: 0,
    balls_face: 0,
    balls_bowled: 0,
    fours: 0,
    last_over: false,
    sixes: 0,
    out: false,
    dot_ball: 0,
    strike_rate: 0,
    overs: 0,
    runs_given: 0,
    wickets: 0,
    economy: 0.0,
  },
  {
    id: 1,
    name: "shikhar dhawan",
    runs_made: 0,
    balls_face: 0,
    balls_bowled: 0,
    fours: 0,
    last_over: false,
    sixes: 0,
    out: false,
    dot_ball: 0,
    strike_rate: 0.0,
    overs: 0,
    runs_given: 0,
    wickets: 0,
    economy: 0.0,
  },
  {
    id: 2,
    name: "virat kohli",
    runs_made: 0,
    balls_face: 0,
    balls_bowled: 0,
    fours: 0,
    last_over: false,
    sixes: 0,
    out: false,
    dot_ball: 0,
    strike_rate: 0.0,
    overs: 0,
    runs_given: 0,
    wickets: 0,
    economy: 0.0,
  },
  {
    id: 3,
    name: "kl rahul",
    runs_made: 0,
    balls_face: 0,
    balls_bowled: 0,
    fours: 0,
    last_over: false,
    sixes: 0,
    out: false,
    dot_ball: 0,
    strike_rate: 0.0,
    overs: 0,
    runs_given: 0,
    wickets: 0,
    economy: 0.0,
  },
  {
    id: 4,
    name: "rishabh pant",
    runs_made: 0,
    balls_face: 0,
    balls_bowled: 0,
    fours: 0,
    last_over: false,
    sixes: 0,
    out: false,
    dot_ball: 0,
    strike_rate: 0.0,
    overs: 0,
    runs_given: 0,
    wickets: 0,
    economy: 0.0,
  },
  {
    id: 5,
    name: "dinesh karthik",
    runs_made: 0,
    balls_face: 0,
    balls_bowled: 0,
    fours: 0,
    last_over: false,
    sixes: 0,
    out: false,
    dot_ball: 0,
    strike_rate: 0.0,
    overs: 0,
    runs_given: 0,
    wickets: 0,
    economy: 0.0,
  },
  {
    id: 6,
    name: "ravindra jadeja",
    runs_made: 0,
    balls_face: 0,
    balls_bowled: 0,
    fours: 0,
    last_over: false,
    sixes: 0,
    out: false,
    dot_ball: 0,
    strike_rate: 0.0,
    overs: 0,
    runs_given: 0,
    wickets: 0,
    economy: 0.0,
  },
  {
    id: 7,
    name: "ravi ashwin",
    runs_made: 0,
    balls_face: 0,
    balls_bowled: 0,
    fours: 0,
    last_over: false,
    sixes: 0,
    out: false,
    dot_ball: 0,
    strike_rate: 0.0,
    overs: 0,
    runs_given: 0,
    wickets: 0,
    economy: 0.0,
  },
  {
    id: 8,
    name: "deepak chahar",
    runs_made: 0,
    balls_face: 0,
    balls_bowled: 0,
    fours: 0,
    last_over: false,
    sixes: 0,
    out: false,
    dot_ball: 0,
    strike_rate: 0.0,
    overs: 0,
    runs_given: 0,
    wickets: 0,
    economy: 0.0,
  },
  {
    id: 9,
    name: "mohammad shami",
    runs_made: 0,
    balls_face: 0,
    balls_bowled: 0,
    fours: 0,
    last_over: false,
    sixes: 0,
    out: false,
    dot_ball: 0,
    strike_rate: 0.0,
    overs: 0,
    runs_given: 0,
    wickets: 0,
    economy: 0.0,
  },
  {
    id: 10,
    name: "jaspreet bumrah",
    runs_made: 0,
    balls_face: 0,
    balls_bowled: 0,
    fours: 0,
    last_over: false,
    sixes: 0,
    out: false,
    dot_ball: 0,
    strike_rate: 0.0,
    overs: 0,
    runs_given: 0,
    wickets: 0,
    economy: 0.0,
  },
];

const noSelect = {
  id: -99,
  name: "?",
  runs_made: "?",
  balls_face: "?",
  balls_bowled: "?",
  fours: "?",
  sixes: "?",
  out: false,
  dot_ball: "?",
  strike_rate: "?",
  overs: "?",
  runs_given: "?",
  wickets: "?",
  economy: "?",
};

let last_over_index = -1;
let alluarray = [];
let thisOverRunBall = {
  runs: 0,
  balls: 0,
};

const Bowling = (props) => {
  //NAVIGSTION
  let navigate = useNavigate();
  //NORMAL VARIABLES
  const totalOvers = Number(props.matchDetail.overValue);
  const teamName = props.matchDetail.teamNameValue;
  const toss = props.matchDetail.tossValue;
  const selectedTo = props.matchDetail.selectedToValue;
  const targetrun = props.matchDetail.target;
  const footerString =
    props.matchDetail.target === 4000
      ? props.matchDetail.teamNameValue
      : `${props.matchDetail.teamNameValue} need to save ${props.matchDetail.target} runs`;
  const selectedStyle = {
    color: "var(--darkblue)",
    background: "white",
    fontWeight: "bold",
  };
  const lastOverStyle = {
    border: "none",
  };
  const defaultOver = ["?"];

  //STATE VARIABLE
  const [cbindex, setCbindex] = useState(-1);
  const [ballTeam, setBallTeam] = useState(props.team);
  const [oppscore, setOppscore] = useState(0);
  const [oppwicket, setOppwicket] = useState(0);
  const [over, setOver] = useState(0);
  const [overBall, setOverBall] = useState(0);
  const [thisOver, setthisOver] = useState([]);
  //FUNCTIONS
  //function to set current bowler
  const setCurrentBowler = (e) => {
    if (cbindex === -1) {
      console.log(e.target.innerHTML);
      let tempindex = 0;
      for (let i = 0; i < 11; i++) {
        if (ballTeam[i].name === e.target.innerHTML) {
          tempindex = ballTeam[i].id;
          break;
        }
      }
      setCbindex(tempindex);
    } else {
      alert("BC ek sath kara le sabse bowling");
    }
  };
  //function to handle event button click
  const eventButtonClicked = (e) => {
    if (cbindex > -1 && validate()) {
      setthisOver([...thisOver, e.target.innerHTML]);
      setBowlerstats(e.target.innerHTML);
      thisOverRunBallUpdate(e.target.innerHTML);
      proceedOvers(e.target.innerHTML);
      let clickedRun = Number(e.target.innerHTML);
      if (clickedRun >= 0) {
        setOppscore(oppscore + clickedRun);
      } else {
        switch (e.target.innerHTML) {
          case "wk":
            setOppwicket(oppwicket + 1);
            break;
          case "wd":
            setOppscore(oppscore + 1);
            break;
          case "wd1":
            setOppscore(oppscore + 2);
            break;
          case "wd2":
            setOppscore(oppscore + 3);
            break;
          case "wd3":
            setOppscore(oppscore + 4);
            break;
          case "wd4":
            setOppscore(oppscore + 5);
            break;
          case "nb":
            setOppscore(oppscore + 1);
            break;
          case "nb1":
            setOppscore(oppscore + 2);
            break;
          case "nb2":
            setOppscore(oppscore + 3);
            break;
          case "nb3":
            setOppscore(oppscore + 4);
            break;
          case "nb4":
            setOppscore(oppscore + 5);
            break;
          case "nb6":
            setOppscore(oppscore + 7);
            break;
          case "lb1":
            setOppscore(oppscore + 1);
            break;
          case "lb2":
            setOppscore(oppscore + 2);
            break;
          case "lb3":
            setOppscore(oppscore + 3);
            break;
          case "lb4":
            setOppscore(oppscore + 4);
            break;
          case "wdwk":
            setOppscore(oppscore + 1);
            setOppwicket(oppwicket + 1);
            break;
        }
      }
    } else {
      alert("Select a bowler before scoring");
    }
  };

  //function to chnage player stats
  const setBowlerstats = (val) => {
    let temprun = Number(val);
    if (temprun) {
      ballTeam[cbindex].runs_given += temprun;
    }
    if (val.indexOf("wd") === 0 || val.indexOf("nb") === 0) {
      ballTeam[cbindex].runs_given += 1;
    }
    if (val.indexOf("wk") === 0 || val === "wdwk") {
      ballTeam[cbindex].wickets += 1;
    }
    if (val.indexOf("wd") !== 0 && val.indexOf("nb") !== 0) {
      ballTeam[cbindex].balls_bowled += 1;
    }
  };

  //function to proceed overs
  const proceedOvers = (val) => {
    if (val.indexOf("wd") === 0 || val.indexOf("nb") === 0) {
    } else {
      if (overBall === 5) {
        thisOverRunBall.runs = 0;
        thisOverRunBall.balls = 0;
        setthisOver([]);
        setOverBall(0);
        setOver(over + 1);
        ballTeam[cbindex].overs += 1;
        ballTeam[cbindex].last_over = true;
        if (last_over_index > -1) {
          ballTeam[last_over_index].last_over = false;
        }
        last_over_index = cbindex;
        setCbindex(-1);
      } else {
        setOverBall(overBall + 1);
      }
    }
  };

  //function to upate thisOverRunBall
  const thisOverRunBallUpdate = (val) => {
    if (Number(val) >= 0) {
      thisOverRunBall.runs += Number(val);
      thisOverRunBall.balls += 1;
    } else {
      if (val === "wd" || val === "nb") {
        thisOverRunBall.runs += 1;
      } else if (val === "wd1" || val === "nb1") {
        thisOverRunBall.runs += 2;
      } else if (val === "wd2" || val === "nb2") {
        thisOverRunBall.runs += 3;
      } else if (val === "wd3" || val === "nb3") {
        thisOverRunBall.runs += 4;
      } else if (val === "wd4" || val === "nb4") {
        thisOverRunBall.runs += 5;
      } else if (val === "nb6") {
        thisOverRunBall.runs += 7;
      } else if (val === "lb1") {
        thisOverRunBall.runs += 1;
        thisOverRunBall.balls += 1;
      } else if (val === "lb2") {
        thisOverRunBall.runs += 2;
        thisOverRunBall.balls += 1;
      } else if (val === "lb3") {
        thisOverRunBall.runs += 3;
        thisOverRunBall.balls += 1;
      } else if (val === "lb4") {
        thisOverRunBall.runs += 4;
        thisOverRunBall.balls += 1;
      } else if (val === "wk") {
        thisOverRunBall.balls += 1;
      }
    }
  };

  //function to move next
  const next = () => {
    if (over === totalOvers || oppwicket === 10 || oppscore > targetrun) {
      let movetoStats = false;
      for (let i = 0; i < 11; i++) {
        if (ballTeam[i].balls_face > 0) {
          movetoStats = true;
          break;
        }
      }
      let detailObj = {
        tossValue: toss,
        selectedToValue: selectedTo,
        overValue: totalOvers,
        teamNameValue: teamName,
        target: oppscore,
      };
      props.appPlayerArray(ballTeam, detailObj);
      if (movetoStats) {
        let resultObj = {
          result: oppscore > targetrun ? "LOST" : "WON",
        };
        props.statSetterFunction(ballTeam, resultObj);
        props.indexSetter(3);
        navigate("/statistics");
      } else {
        props.indexSetter(1);
        navigate("/batting");
      }
    } else {
      alert("dhat teri maa ki chut");
    }
  };
  //validate function to check should event occur or not
  const validate = () => {
    if (over === totalOvers || oppwicket === 10 || oppscore > targetrun) {
      alert("You can move to next segment by clicking next!");
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="ball-wrapper">
      <div className="ball-top">
        <div className="ball-left">
          <div className="ball-team">
            <div className="team">Bowling Card</div>
            {ballTeam.map((p) => {
              return (
                <div
                  className="ball-team-item"
                  key={p.id}
                  style={
                    p.id === cbindex
                      ? selectedStyle
                      : p.id === last_over_index
                      ? lastOverStyle
                      : {}
                  }
                >
                  <div onClick={!p.last_over ? setCurrentBowler : {}}>
                    {p.name}
                  </div>
                  <div>
                    {p.overs}/{p.runs_given}/{p.wickets}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="ball-right">
          <div className="bat-heading">Current Bowler</div>
          <div className="currentBowler">
            <CurrentBowler
              currentBowler={cbindex === -1 ? noSelect : ballTeam[cbindex]}
              currentOver={thisOver.length === 0 ? defaultOver : thisOver}
              runball={thisOverRunBall}
            />
          </div>
          <div className="bat-heading">events</div>
          <div className="bat-buttons">
            <EventButton eventhandlerFunction={eventButtonClicked} />
            {/* <div className="bat-button-group">
              <button className="bat-button">0</button>
              <button className="bat-button">1</button>
              <button className="bat-button">2</button>
              <button className="bat-button">3</button>
              <button className="bat-button bat-supreme-button">4</button>
              <button className="bat-button bat-supreme-button">6</button>
              <button className="bat-button bat-supreme-button">wk</button>

              <button className="bat-button">wd</button>
            </div>
            <div className="bat-button-group">
              <button className="bat-button">wd1</button>
              <button className="bat-button">wd2</button>
              <button className="bat-button">wd3</button>
              <button className="bat-button">wd4</button>
              <button className="bat-button">lb1</button>
              <button className="bat-button">lb2</button>
              <button className="bat-button">lb3</button>
              <button className="bat-button">lb4</button>
            </div>
            <div className="bat-button-group">
              <button className="bat-button">&larr;</button>
              <button className="bat-button">nb</button>
              <button className="bat-button">nb1</button>
              <button className="bat-button">nb2</button>
              <button className="bat-button">nb3</button>
              <button className="bat-button">nb4</button>
              <button className="bat-button">nb6</button>
              <button className="bat-button bat-supreme-button">wdwk</button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="ball-bottom">
        <div className="ball-footer">
          <div className="ball-score">
            {oppscore}/{oppwicket}
          </div>
          <div className="ball-teamName">{footerString}</div>
          <div className="ball-overs">
            {over}.{overBall}
          </div>
        </div>
      </div>
      <button
        className="next-button"
        onClick={next}
        style={
          over < totalOvers && oppwicket < 10 && oppscore <= targetrun
            ? { background: "white" }
            : {}
        }
      >
        next
      </button>
    </div>
  );
};

export default Bowling;
