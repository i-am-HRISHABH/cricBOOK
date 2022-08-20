import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Setting from "./Components/SettingPage/Setting";
import Batting from "./Components/BattingPage/Batting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Bowling from "./Components/BowlingPage/Bowling";

function App() {
  const [mainTeam, setMainTeam] = useState([]);
  const appPlayerArray = (playerArray) => {
    console.log(playerArray);
    setMainTeam(playerArray);
  };
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/error"
            element={<Setting appPlayerArray={appPlayerArray} />}
          />
          <Route path="/batting" element={<Batting team={mainTeam} />} />
          <Route path="/" element={<Bowling />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
