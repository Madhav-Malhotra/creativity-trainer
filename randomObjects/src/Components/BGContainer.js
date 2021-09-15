import React, { useState } from "react";
import GenerateTools from "./GenerateTools.js";
import PromptDisplay from "./PromptDisplay.js";
import { randomObjects, randomPrompts } from "../data/data.js";

function BGContainer(props) {
  //Displays the generated objects after they're generated
  const defaultStyles = {
    promptDisplayStyles: { display: "none" }
  };
  const [styles, setStyles] = useState(defaultStyles);

  //Stores data for random objects
  const [generated, setGenerated] = useState({ prompt: "", items: [] });

  //When button clicked, select random objects
  const handleClick = numObjects => {
    const promptNum = Math.floor(Math.random() * randomPrompts.length);
    const randomPrompt = randomPrompts[promptNum];

    let selectedObjects = [];
    do {
      const rand = Math.floor(Math.random() * randomObjects.length);
      const select = randomObjects[rand];
      selectedObjects.includes(select) ? null : selectedObjects.push(select);
    } while (selectedObjects.length < numObjects);

    let newGenerated = { prompt: randomPrompt, items: selectedObjects };
    setGenerated(newGenerated);
    stylesRefresher(promptNum);
  };

  //Updates styles so that generated objects are visible
  const stylesRefresher = promptNum => {
    //Making the Objects Visible
    let newStyles = styles;
    newStyles.promptDisplayStyles = { display: "block" };
    setStyles(newStyles);
    props.changeBG(promptNum);
  };

  return (
    <div className="BG-Container py-4">
      <h2>Welcome to the Random Object Game!</h2>
      <GenerateTools handleClick={handleClick} />
      <PromptDisplay
        styles={styles.promptDisplayStyles}
        generated={generated}
      />
    </div>
  );
}

export default BGContainer;
