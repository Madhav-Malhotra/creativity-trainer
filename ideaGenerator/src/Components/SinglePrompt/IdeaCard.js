import React, { useState } from "react";

function IdeaCard(props) {
  const [idea, setIdea] = useState(props.idea.body);

  const handleClick = () => {
    props.handleClick();
  };

  const handleChange = (e) => {
    setIdea(e.target.value);
    props.handleChange(props.idea.id, e.target.value);
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter" && e.target.value) {
      handleClick();
    }
  };

  return (
    <li className="idea-card row mb-2">
      <div className="col-12 text-left">
        <button onClick={handleClick}>+</button>
        <input
          type="text"
          value={idea}
          onChange={handleChange}
          onKeyDown={handleOnKeyDown}
          placeholder={"Describe idea here"}
        />
      </div>
    </li>
  );
}

export default IdeaCard;
