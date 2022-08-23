import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Setting from "./Components/SettingPage/Setting";
import Batting from "./Components/BattingPage/Batting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Bowling from "./Components/BowlingPage/Bowling";
import Stats from "./Components/StatisticPage/Stats";

function App() {
  const [mainTeam, setMainTeam] = useState([]);
  const [matchSettings, setMS] = useState({});
  let [index, setIndex] = useState(0);
  const appPlayerArray = (playerArray, matchDetailObj) => {
    console.log(playerArray);
    console.log(matchDetailObj);
    // setIndex(1);
    setMainTeam(playerArray);
    setMS(matchDetailObj);
  };
  const statFunction = (playerArray, resultObj) => {
    console.log("final teamList: " + playerArray);
    console.log("result object: " + resultObj);
    // setIndex(3);
    setMainTeam(playerArray);
    setMS(resultObj);
  };
  const indexSetter = (i) => {
    setIndex(i);
  };
  return (
    <div>
      <Router>
        <Navbar index={index} />
        <Routes>
          <Route
            path="/"
            element={
              <Setting
                appPlayerArray={appPlayerArray}
                indexSetter={indexSetter}
              />
            }
          />
          <Route
            path="/batting"
            element={
              <Batting
                team={mainTeam}
                matchDetail={matchSettings}
                appPlayerArray={appPlayerArray}
                statSetterFunction={statFunction}
                indexSetter={indexSetter}
              />
            }
          />
          <Route
            path="/bowling"
            element={
              <Bowling
                team={mainTeam}
                matchDetail={matchSettings}
                appPlayerArray={appPlayerArray}
                statSetterFunction={statFunction}
                indexSetter={indexSetter}
              />
            }
          />
          <Route
            path="/statistics"
            element={<Stats team={mainTeam} resultObject={matchSettings} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
