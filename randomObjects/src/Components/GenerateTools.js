import React, { useState } from "react";

function GenerateTools(props) {
  const [numObjects, setNumObjects] = useState(3);

  const handleChange = e => {
    setNumObjects(e.target.value);
  };

  return (
    <div className="generate-tools">
      <input
        className="mr-3"
        type="range"
        min="1"
        max="10"
        onChange={handleChange}
        defaultValue={3}
      />
      <span>Generate {numObjects} random object(s)</span>
      <button
        className="mx-auto mt-2"
        onClick={() => props.handleClick(numObjects)}
      >
        Generate
      </button>
    </div>
  );
}

export default GenerateTools;
