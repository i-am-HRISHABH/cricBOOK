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
  const appPlayerArray = (playerArray, matchDetailObj) => {
    console.log(playerArray);
    console.log(matchDetailObj);
    setMainTeam(playerArray);
    setMS(matchDetailObj);
  };
  const statFunction = (playerArray, resultObj) => {
    console.log("final teamList: " + playerArray);
    console.log("result object: " + resultObj);
    setMainTeam(playerArray);
    setMS(resultObj);
  };
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Setting appPlayerArray={appPlayerArray} />}
          />
          <Route
            path="/batting"
            element={
              <Batting
                team={mainTeam}
                matchDetail={matchSettings}
                appPlayerArray={appPlayerArray}
                statSetterFunction={statFunction}
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
