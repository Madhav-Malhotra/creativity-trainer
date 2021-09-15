import React, { useState } from "react";
import TimeTrial from "./Components/MultiPrompt/TimeTrial";
import SinglePrompt from "./Components/SinglePrompt/SinglePrompt";

function App() {
  const [single, setSingle] = useState(false);

  const handleClick = (e) => {
    if (e.target.innerText === "Multi-Prompt") {
      setSingle(false);
    } else {
      setSingle(true);
    }
  };

  return (
    <>
      <div style={single ? { display: "none" } : {}}>
        <TimeTrial handleClick={handleClick} />
      </div>
      <div style={single ? {} : { display: "none" }}>
        <SinglePrompt handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
