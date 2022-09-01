import React, { useState } from "react";
import CurrentBatsman from "../CurrentBatsman/CurrentBatsman";
import EventButton from "../EventButtons/EventButton";
import "./Batting.css";
import { useNavigate } from "react-router-dom";

const ploya = [
  {
    id: 0,
    name: "rohit sharma",
    runs_made: 0,
    balls_face: 0,
    fours: 0,
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
    fours: 0,
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
    fours: 0,
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
    fours: 0,
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
    fours: 0,
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
    fours: 0,
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
    fours: 0,
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
    fours: 0,
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
    fours: 0,
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
    fours: 0,
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
    name: "jaspree bumrah",
    runs_made: 0,
    balls_face: 0,
    fours: 0,
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

const blank_player = {
  id: -99,
  name: "player name",
  runs_made: "?",
  balls_face: "?",
  fours: "?",
  sixes: "?",
  dot_ball: "?",
  out: false,
  strike_rate: "?",
  overs: 0,
  runs_given: 0,
  wickets: 0,
  economy: 0.0,
};

let onSktrike = 1;

const Batting = (props) => {
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
      : `${props.matchDetail.teamNameValue} need ${props.matchDetail.target} runs to win`;
  const selectedStyle = {
    color: "var(--darkblue)",
    background: "white",
    fontWeight: "bold",
  };

  const outStyle = {
    border: "none",
  };

  //STATE VARIABLES
  const [theTeam, settheTeam] = useState(props.team);
  const [cp1index, setcp1index] = useState(-1);
  const [cp2index, setcp2index] = useState(-1);
  const [score, setScore] = useState(0);
  const [wicket_fallen, setWF] = useState(0);
  const [overcompleted, setOC] = useState(0);
  const [overBall, setOverBall] = useState(0);

  //FUNCTIONS

  //1) to set current players on playeritem click
  const changecurrentPlayer = (e) => {
    let index = 0;
    for (let i = 0; i < 11; i++) {
      if (theTeam[i].name === e.target.innerHTML) {
        index = theTeam[i].id;
        // alert("index: " + index);
        break;
      }
    }
    if (!theTeam[index].out) {
      if (cp1index === -1) {
        setcp1index(index);

        // alert("cp1index: " + cp1index);
      } else if (cp2index === -1) {
        setcp2index(index);

        // alert("cp1index " + cp1index);
      } else {
        alert("2 plyers are already playing");
      }
    } else {
      alert("this player is out!");
    }
  };

  //2) event button click updating scor eand player
  const eventButtonClick = (e) => {
    if (cp1index > -1 && cp2index > -1 && validate()) {
      let clickedRun = Number(e.target.innerHTML);
      changePlayerstats(e.target.innerHTML);
      proceedOver(e.target.innerHTML);
      if (clickedRun >= 0) {
        setScore(score + clickedRun);
      } else {
        switch (e.target.innerHTML) {
          case "wk":
            setWF(wicket_fallen + 1);
            // handlewicketFall();
            break;
          case "wd":
            setScore(score + 1);
            break;
          case "wd1":
            setScore(score + 2);
            changeOnSkrite();
            break;
          case "wd2":
            setScore(score + 3);
            break;
          case "wd3":
            setScore(score + 4);
            changeOnSkrite();
            break;
          case "wd4":
            setScore(score + 5);
            break;
          case "nb":
            setScore(score + 1);
            break;
          case "nb1":
            setScore(score + 2);
            break;
          case "nb2":
            setScore(score + 3);
            break;
          case "nb3":
            setScore(score + 4);
            break;
          case "nb4":
            setScore(score + 5);
            break;
          case "nb6":
            setScore(score + 6);
            break;
          case "lb1":
            setScore(score + 1);
            changeOnSkrite();
            break;
          case "lb2":
            setScore(score + 2);
            break;
          case "lb3":
            setScore(score + 3);
            changeOnSkrite();
            break;
          case "lb4":
            setScore(score + 4);
            break;
          case "wdwk":
            setScore(score + 1);
            setWF(wicket_fallen + 1);
            // handlewicketFall();
            break;
        }
      }
    } else {
      alert("Please select to players before scoring.");
    }
  };
  //change playerSats
  const changePlayerstats = (val) => {
    let run = Number(val);
    if (run >= 0) {
      if (run === 0) {
        theTeam[givePlayer(onSktrike)].dot_ball += 1;
      }
      theTeam[givePlayer(onSktrike)].runs_made += run;
      if (run === 4) {
        theTeam[givePlayer(onSktrike)].fours += 1;
      }
      if (run === 6) {
        theTeam[givePlayer(onSktrike)].sixes += 1;
      }
      // if (run % 2 !== 0) {
      //   changeOnSkrite();
      // }
    } else {
      switch (val) {
        case "nb1":
          console.log("in nb1");
          theTeam[givePlayer(onSktrike)].runs_made += 1;
          changeOnSkrite();
          break;
        case "nb2":
          theTeam[givePlayer(onSktrike)].runs_made += 2;
          break;
        case "nb3":
          theTeam[givePlayer(onSktrike)].runs_made += 3;
          changeOnSkrite();
          break;
        case "nb4":
          theTeam[givePlayer(onSktrike)].runs_made += 4;
          theTeam[givePlayer(onSktrike)].fours += 1;
          break;
        case "nb6":
          theTeam[givePlayer(onSktrike)].runs_made += 6;
          theTeam[givePlayer(onSktrike)].sixes += 1;
          break;
        case "wk":
          handlewicketFall();
          break;
        case "wdwk":
          handlewicketFall();
          break;
      }
    }
  };
  //function to chnage to overs and balls and player ball faced
  const proceedOver = (val) => {
    let wd = val.indexOf("wd");
    let nb = val.indexOf("nb");
    if (nb === 0 || wd === 0) {
    } else {
      theTeam[givePlayer(onSktrike)].balls_face += 1;
      if (Number(val) ? (Number(val) % 2 !== 0 ? true : false) : false) {
        changeOnSkrite();
      }
      if (overBall === 5) {
        setOverBall(0);
        let temp = overcompleted + 1;
        setOC(temp);
        changeOnSkrite();
      } else {
        let temp = overBall + 1;
        setOverBall(temp);
      }
    }
  };
  //function to handle fall of wicket.
  const handlewicketFall = () => {
    alert("Player has been dissmissed by bowlers.");
    // setWF(wicket_fallen + 1);
    theTeam[givePlayer(onSktrike)].out = true;
    // theTeam[givePlayer(onSktrike)].strike_rate = Math.round(
    //   (theTeam[givePlayer(onSktrike)].runs_made /
    //     theTeam[givePlayer(onSktrike)].runs_made) *
    //     100
    // );
    if (onSktrike == 1) {
      setcp1index(-1);
    } else {
      setcp2index(-1);
    }
  };
  //function to return index acc to onstrikevariabke
  const givePlayer = (val) => {
    if (val === 1) {
      return cp1index;
    } else {
      return cp2index;
    }
  };

  // function to change strike
  const changeOnSkrite = () => {
    if (onSktrike === 1) {
      onSktrike = 2;
    } else {
      onSktrike = 1;
    }
  };

  //function to move to next
  const next = () => {
    if (
      overcompleted === totalOvers ||
      wicket_fallen === 10 ||
      score > targetrun
    ) {
      let movetoStats = false;
      for (let i = 10; i >= 0; i--) {
        if (theTeam[i].overs > 0) {
          movetoStats = true;
          break;
        }
      }
      let detailObj = {
        tossValue: toss,
        selectedToValue: selectedTo,
        overValue: totalOvers,
        teamNameValue: teamName,
        target: score,
      };
      props.appPlayerArray(theTeam, detailObj);
      if (movetoStats) {
        let resultObj = {
          result: score > targetrun ? "WON" : "LOST",
        };
        props.statSetterFunction(theTeam, resultObj);
        props.indexSetter(3);
        navigate("/statistics");
      } else {
        props.indexSetter(2);
        navigate("/bowling");
      }
    } else {
      alert("cannot move to next section");
    }
  };

  //function to validate field
  const validate = () => {
    if (
      overcompleted === totalOvers ||
      wicket_fallen === 10 ||
      score > targetrun
    ) {
      alert("You can move to next segment by clicking next!");
      return false;
    } else {
      // alert("You can move to next segment by clicking next!");
      return true;
    }
  };

  return (
    <div className="bat-wrapper">
      <div className="bat-top">
        <div className="bat-top-left">
          <div className="bat-team">
            <div className="team">Batting Card</div>
            {theTeam.map((p) => {
              return (
                <div
                  className="bat-team-item"
                  key={p.name}
                  style={
                    p.id === cp1index || p.id === cp2index
                      ? selectedStyle
                      : p.out
                      ? outStyle
                      : {}
                  }
                >
                  <div onClick={changecurrentPlayer}>{p.name}</div>
                  <div>
                    {p.runs_made}/{p.balls_face}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bat-top-right">
          <div className="bat-heading">Batters on crease</div>
          <div className="bat-currentBatterBox">
            <div className="currentBatsmanBox">
              <CurrentBatsman
                playerObj={cp1index < 0 ? blank_player : theTeam[cp1index]}
                shadow={onSktrike === 1 ? true : false}
              />
            </div>
            <div className="currentBatsmanBox">
              <CurrentBatsman
                playerObj={cp2index < 0 ? blank_player : theTeam[cp2index]}
                shadow={onSktrike === 2 ? true : false}
              />
            </div>
          </div>
          <div className="bat-heading">Event</div>
          {/* <div className="bat-buttons" onClick={eventButtonClick}> */}
          <div className="bat-buttons">
            <EventButton eventhandlerFunction={eventButtonClick} />
          </div>

          {/* <div className="bat-button-group"> */}
          {/* <button className="bat-button">0</button>
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
              <button className="bat-button">{cp1index}</button>
              <button className="bat-button">nb</button>
              <button className="bat-button">nb1</button>
              <button className="bat-button">nb2</button>
              <button className="bat-button">nb3</button>
              <button className="bat-button">nb4</button>
              <button className="bat-button">nb6</button>
              <button className="bat-button bat-supreme-button">wdwk</button> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
      <div className="bat-footer">
        <div className="bat-score">
          {score}/{wicket_fallen}
        </div>
        <div className="bat-teamName">{footerString}</div>
        <div className="bat-overs">
          {overcompleted}.{overBall}
        </div>
      </div>
      <button
        className="next-button"
        onClick={next}
        style={
          overcompleted < totalOvers && wicket_fallen < 10 && score <= targetrun
            ? { background: "white" }
            : {}
        }
      >
        next
      </button>
    </div>
  );
};

export default Batting;
