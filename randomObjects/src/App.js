import React, { useState } from "react";
import "./styles.css";
import BGContainer from "./Components/BGContainer.js";

export default function App() {
  const [bgImg, setBgImg] = useState({
    backgroundImage: "url(../PromptBackgrounds/0.jpg)"
  });

  const changeBG = promptNum => {
    setBgImg({
      backgroundImage: `url(../PromptBackgrounds/${promptNum}.jpg)`
    });
  };

  return (
    <div className="background row" style={bgImg}>
      <div className="App container p-5 mx-auto my-auto">
        <BGContainer changeBG={changeBG} />
      </div>
    </div>
  );
}
