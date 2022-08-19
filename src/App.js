import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Setting from "./Components/SettingPage/Setting";
import Batting from "./Components/BattingPage/Batting";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

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
            path="/"
            element={<Setting appPlayerArray={appPlayerArray} />}
          />
          <Route path="/batting" element={<Batting team={mainTeam} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
