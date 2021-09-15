import React, { useState, useEffect } from "react";
import Alert from "../../data/sound";

function HeaderAndIntro(props) {
  //const [dark, setDark] = props.dark;
  const [time, setTime] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [red, setRed] = useState({});
  const [visible, setVisible] = useState(false);
  const [play, setPlay] = useState(false);

  //To change time with slider
  const handleChange = (e) => {
    setTime(e.target.value);
  };

  //To start the timer
  const handleClick = (e) => {
    if (!isActive) props.setReset(true);
    setIsActive(!isActive);
    setRed({});
  };

  //Show Ideas created
  const showIdeas = (e) => {
    if (e.target.innerText === "See ideas created") {
      e.target.innerText = "Hide ideas created";
      props.setShowIdeas(true);
    } else {
      setVisible(false);
      props.setShowIdeas(false);
      e.target.innerText = "See ideas created";
    }
  };

  //Countdown logic and when timer ends
  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (time <= 0) {
          setIsActive(!isActive);
          setRed({ color: "red" });
          setVisible(true);
          setPlay(true);
        } else setTime((time) => time - 1);
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <>
      <div className="px-4">
        <p>
          Adjust the slider to set the timer. Answer as many prompts with ideas
          as possible. Press enter or click on the checkmark to get a new
          prompt.
        </p>
        <hr />
        <h3 className="timer-display" style={red}>
          {time}s / {props.points} ideas
        </h3>

        <div className="mt-4 text-center">
          <span className="mr-2">0s</span>
          <input
            className="timer-settings align-text-bottom"
            type="range"
            min="0"
            max="240"
            step="30"
            value={time}
            onChange={handleChange}
          />
          <span className="ml-2 mr-5">240s</span>

          <button className="timer-start mb-2 py-1 px-3" onClick={handleClick}>
            {isActive ? "Stop " : "Start "} timer
          </button>

          <button
            className="show-ideas timer-start ml-5 py-1 px-3"
            onClick={showIdeas}
            style={visible ? { display: "inline" } : { display: "none" }}
          >
            See ideas created
          </button>
        </div>

        <hr />
        <div style={{ display: "none" }}>
          {play ? <Alert /> : null}
          {play ? setTimeout(() => setPlay(false), 3500) : null}
        </div>
      </div>
    </>
  );
}

export default HeaderAndIntro;
