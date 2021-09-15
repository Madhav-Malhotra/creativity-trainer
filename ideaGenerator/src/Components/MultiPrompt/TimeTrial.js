import React, { useState, useEffect } from "react";
import IdeasList from "./IdeasList";
import Intro from "./Intro";
import Header from "./Header";

import dataImport from "../../data/data";
let data = dataImport;
let generatedIdeas = [];

export default function TimeTrial(props) {
  const [ideas, setIdeas] = useState(defaultState);
  const [points, setPoints] = useState(0);
  const [reset, setReset] = useState(false);
  const [showIdeas, setShowIdeas] = useState(false);

  //When user types something in as answer
  const handleChange = (id, answer) => {
    let newIdeas = JSON.parse(JSON.stringify(ideas));
    newIdeas.forEach((idea) => {
      if (idea.id === id) {
        idea.answer = answer;
      }
    });
    setIdeas(newIdeas);
  };

  //When user generates new idea
  const handleClick = (id) => {
    let newIdeas = JSON.parse(JSON.stringify(ideas));
    newIdeas.forEach((idea) => {
      if (idea.id === id) {
        generatedIdeas.push({ prompt: idea.prompt, answer: idea.answer });
        data = data.filter((item) => idea.prompt !== item);
        idea.answer = "";
        idea.prompt = data[Math.floor(Math.random() * data.length)];
        setPoints(points + 1);
      }
    });
    setIdeas(newIdeas);
  };

  //If timer ends and points need to be reset
  useEffect(() => {
    if (reset) {
      setPoints(0);
      setShowIdeas(false);
      setReset(!reset);
      generatedIdeas = [];
    }
  }, [reset]);

  return (
    <div className="container">
      <div className="App">
        <Header handleClick={props.handleClick} />
        <Intro
          setReset={setReset}
          points={points}
          setShowIdeas={setShowIdeas}
        />

        <IdeasList
          ideas={ideas}
          handleChange={handleChange}
          handleClick={handleClick}
          showIdeas={showIdeas}
          generatedIdeas={generatedIdeas}
        />
      </div>
    </div>
  );
}

//Temporary state
let defaultState = [];
do {
  const randEl = data[Math.floor(Math.random() * data.length)];
  if (!defaultState.includes(randEl)) {
    defaultState.push(randEl);
    data = data.filter((item) => item !== randEl);
  }
} while (defaultState.length < 4);
defaultState = defaultState.map((prompt) => {
  let idea = {};
  idea.prompt = prompt;
  idea.answer = "";
  idea.id = `${Math.random()}_${new Date().getTime()}`;
  return idea;
});
