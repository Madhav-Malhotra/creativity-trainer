import React, { useState } from "react";
import prompts from "../../data/data";

function RandomPrompt(props) {
  const randNum = Math.floor(Math.random() * prompts.length);
  const [prompt, setPrompt] = useState(prompts[randNum]);

  const handleClick = () => {
    let newRand;
    do {
      newRand = Math.floor(Math.random() * prompts.length);
    } while (newRand === randNum);
    setPrompt(prompts[newRand]);
  };

  return (
    <div className="random-single-prompt pb-4 row mx-0">
      <div className="col-9 text-left ml-4">
        <h4>{prompt}</h4>
      </div>
      <div className="col-2">
        <button className="shuffle" onClick={handleClick}>
          <img src="../../../Images/shuffle.png" />
        </button>
      </div>
    </div>
  );
}

export default RandomPrompt;
