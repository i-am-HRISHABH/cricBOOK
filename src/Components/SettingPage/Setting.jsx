import React, { useState } from "react";
import "./Setting.css";
import { useNavigate } from "react-router-dom";

const Setting = (props) => {
  //useNavigate navigation
  let navigate = useNavigate();

  //STATES VARIABLES
  const [teamName, setTeamname] = useState("");
  const [toss, setToss] = useState("?");
  const [selectedTo, setSelectedTo] = useState("?");
  const [overs, setOvers] = useState("?");
  const [teamArray, setteamArray] = useState([]);
  const [playerid, setPlayerId] = useState(0);

  // FUNCTIONS
  const handleteamNameChange = (event) => {
    let tumtum = event.target.value.toUpperCase();
    setTeamname(`${tumtum}`);
  };

  const handleOverChange = (event) => {
    let tumtum = event.target.value;
    if (tumtum > 20) {
      alert("over limit is 20 overs only");
      event.target.value = 0;
      setOvers(0);
    } else {
      setOvers(`${tumtum}`);
    }
  };

  const handleTossChange = (event) => {
    let tumtum = event.target.value.toUpperCase();
    setToss(`${tumtum}`);
  };

  const handleSelectedToChange = (event) => {
    let tumtum = event.target.value.toUpperCase();
    setSelectedTo(`${tumtum}`);
  };

  const startGame = (e) => {
    e.preventDefault();
    if (validateFields()) {
      let detailObj = {
        tossValue: toss,
        selectedToValue: selectedTo,
        overValue: overs,
        teamNameValue: teamName,
        target: 4000,
      };
      for (let i = 0; i < 11; i++) {
        teamArray[i].id = i;
      }
      props.appPlayerArray(teamArray, detailObj);
      if (selectedTo === "BAT") {
        props.indexSetter(1);
        navigate("/batting");
      } else if (selectedTo === "BOWL") {
        props.indexSetter(2);
        navigate("/bowling");
      } else {
        alert("selectedTo field only takes bat/bowl input");
      }
    } else {
      alert("Fill all details");
    }
  };

  const validateFields = () => {
    if (
      selectedTo !== "?" &&
      overs !== "?" &&
      toss !== "?" &&
      teamName !== "" &&
      teamArray.length === 11
    ) {
      return true;
    } else {
      return false;
    }
  };

  //remove player
  const removePlayer = (id) => {
    let deletengindex;
    let tempTeamArray = teamArray;
    for (let i = 0; i < 11; i++) {
      if (id === teamArray[i].id) {
        deletengindex = i;
        break;
      }
    }
    // console.log("deleting index: " + deletengindex);
    tempTeamArray.splice(deletengindex, 1);
    setteamArray([...tempTeamArray]);
  };

  // var main_index = 1;
  const addPlayer = (e) => {
    e.preventDefault();
    let playerName = document.getElementById("player-name-input");
    if (teamArray.length <= 10 && playerName.value != "") {
      let tempid = playerid;
      setPlayerId(playerid + 1);
      let obj = {
        id: tempid,
        name: playerName.value,
        runs_made: 0,
        balls_face: 0,
        balls_bowled: 0,
        fours: 0,
        sixes: 0,
        out: false,
        last_over: false,
        dot_ball: 0,
        overs: 0,
        runs_given: 0,
        wickets: 0,
      };
      console.log(obj);
      setteamArray([...teamArray, obj]);
      playerName.value = "";
    } else {
      alert("11 player are already added.");
      playerName.value = "";
    }
  };

  return (
    <div className="setting-wrapper">
      <div className="setting-top">Match Settings</div>
      <div className="setting-below">
        <div className="setting-left">
          <div className="s-pinkbox">Team Name</div>
          <form action="" className="s-form team-name-form">
            <input
              className="s-input"
              type="text"
              placeholder="team name"
              onChange={handleteamNameChange}
            />
          </form>
          <div className="s-pinkbox">Add Player</div>
          <form action="" className="s-form player-name-form">
            <input
              id="player-name-input"
              className="s-input"
              type="text"
              placeholder="player name"
            />
            <input
              type="submit"
              value="Add"
              onClick={(e) => {
                addPlayer(e);
              }}
            />
          </form>
          <div className="s-pinkbox">Match Detail</div>
          <form action="" className="s-form match-detail-form">
            <div>
              <label htmlFor="over">Overs :</label>
              <input
                type="number"
                name="over"
                onChange={handleOverChange}
              ></input>
            </div>
            <div>
              <label htmlFor="toss">Toss :</label>
              <input
                type="text"
                name="toss"
                placeholder="won/lost"
                onChange={handleTossChange}
              ></input>
            </div>
            <div>
              <label htmlFor="selected">Seleted to :</label>
              <input
                type="text"
                name="selected"
                placeholder="bat/bowl"
                onChange={handleSelectedToChange}
              ></input>
            </div>
          </form>
        </div>
        <div className="setting-right">
          <div id="settings-team-name">
            {teamName === "" ? "TEAM NAME" : `${teamName}`}
          </div>
          <div className="team">
            {teamArray.map((p) => {
              return (
                <div className="player-item" key={p.id}>
                  <div>{p.name}</div>
                  <div
                    onClick={() => {
                      removePlayer(p.id);
                    }}
                  >
                    -
                  </div>
                </div>
              );
            })}
          </div>
          <div>About Match</div>
          <div className="aboutMatch">
            {`${overs} Overs fixtures. You ${toss} the toss and selected to ${selectedTo} first`}
          </div>
          <button
            className="settings-button"
            onClick={(e) => {
              startGame(e);
            }}
          >
            START
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
