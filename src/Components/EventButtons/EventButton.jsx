import React from "react";
import "./EventButton.css";
import { useState } from "react";

const EventButton = (props) => {
  const [wdvalue, setWd] = useState("wd");
  const [nbvalue, setNb] = useState("nb");
  const [lbvalue, setLb] = useState("lb+1");

  const wdHandler = (e) => {
    setWd(e.target.value);
  };
  const noballHandler = (e) => {
    setNb(e.target.value);
  };
  const legbyHandler = (e) => {
    setLb(e.target.value);
  };
  return (
    <div className="eb-wrapper">
      <div>
        <button className="eb-btn" onClick={props.eventhandlerFunction}>
          0
        </button>
        <button className="eb-btn" onClick={props.eventhandlerFunction}>
          1
        </button>
        <button className="eb-btn" onClick={props.eventhandlerFunction}>
          2
        </button>
        <button className="eb-btn" onClick={props.eventhandlerFunction}>
          3
        </button>
        <button
          className="eb-btn eb-premium-btn"
          onClick={props.eventhandlerFunction}
        >
          4
        </button>
        <button
          className="eb-btn eb-premium-btn"
          onClick={props.eventhandlerFunction}
        >
          6
        </button>
      </div>
      <div>
        <div className="eb-btn-select">
          <button
            className="eb-btn eb-premium-btn"
            onClick={props.eventhandlerFunction}
          >
            wk
          </button>
        </div>
        <div className="eb-btn-select">
          <button className="eb-btn" onClick={props.eventhandlerFunction}>
            {wdvalue}
          </button>
          <select name="wide" className="eb-wide" onChange={wdHandler}>
            <option value="wd">wd+0</option>
            <option value="wd1">wd+1</option>
            <option value="wd2">wd+2</option>
            <option value="wd3">wd+3</option>
            <option value="wd4">wd+4</option>
            <option value="wdwk">wd+wkt</option>
          </select>
        </div>
        <div className="eb-btn-select">
          <button className="eb-btn" onClick={props.eventhandlerFunction}>
            {nbvalue}
          </button>
          <select name="no" className="eb-noball" onChange={noballHandler}>
            <option value="nb">lb+0</option>
            <option value="nb1">nb+1</option>
            <option value="nb2">nb+2</option>
            <option value="nb3">nb+3</option>
            <option value="nb4">nb+4</option>
            <option value="nb6">nb+6</option>
          </select>
        </div>
        <div className="eb-btn-select">
          <button className="eb-btn" onClick={props.eventhandlerFunction}>
            {lbvalue}
          </button>
          <select name="legby" className="eb-legby" onChange={legbyHandler}>
            <option value="lb1">lb+1</option>
            <option value="lb2">lb+2</option>
            <option value="lb3">lb+3</option>
            <option value="lb4">lb+4</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default EventButton;
