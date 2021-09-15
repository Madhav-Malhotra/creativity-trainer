import React, { useState, useEffect } from "react";
import Header from "../MultiPrompt/Header";
import Intro from "./Intro";
import RandomPrompt from "./RandomPrompt";
import IdeasList from "./IdeasList";

function SinglePrompt(props) {
  const [reset, setReset] = useState(false);
  const [ideas, setIdeas] = useState([{ body: "", id: Math.random() }]);
  const [points, setPoints] = useState(0);
  const ideaHandler = JSON.parse(JSON.stringify(ideas));

  //Add New Idea
  const handleClick = () => {
    setIdeas([...ideaHandler, { body: "", id: Math.random() }]);
    setPoints(points + 1);
  };

  //Modify existing idea
  const handleChange = (id, body) => {
    ideaHandler.forEach((idea) => {
      if (idea.id === id) {
        idea.body = body;
      }
    });
  };

  //If timer ends and points need to be reset
  useEffect(() => {
    if (reset) {
      setPoints(0);
      setReset(!reset);
      setIdeas([{ body: "", id: Math.random() }]);
      //generatedIdeas = [];
    }
  }, [reset]);

  return (
    <div className="container">
      <div className="single-prompt-app App">
        <Header handleClick={props.handleClick} />
        <Intro points={points} setReset={setReset} />
        <RandomPrompt />
        <IdeasList
          ideas={ideas}
          handleClick={handleClick}
          handleChange={handleChange}
        />
      </div>
    </div>
  );
}

export default SinglePrompt;
