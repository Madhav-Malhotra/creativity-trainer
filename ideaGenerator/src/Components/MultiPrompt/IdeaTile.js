import React, { useState } from "react";

function IdeaTile(props) {
  const [answer, setAnswer] = useState(props.idea.answer);

  const handleChange = (e) => {
    if (!props.pastIdea) {
      if (e.target.value !== "\n") {
        setAnswer(e.target.value);
        props.handleChange(props.idea.id, e.target.value);
      } else alert("Enter text to describe idea before submitting.");
    } else {
      alert("Can't modify ideas from last round.");
    }
  };

  const handleClick = () => {
    if (!props.pastIdea) {
      if (answer) {
        props.handleClick(props.idea.id);
        setAnswer("");
      } else alert("Enter text to describe idea before submitting.");
    } else {
      alert("Start new round to generate more ideas.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value) {
      handleClick();
      e.target.blur();
    }
  };

  return (
    <div className="idea-tile col-8 col-md-4 col-lg-4 col-xl-4 mx-4 mb-4">
      <img src="../../Images/thumbtack.png" />
      <button onClick={handleClick}>✔</button>
      <h6>
        <strong>{props.idea.prompt}</strong>
      </h6>
      <textarea
        value={answer}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Describe idea here..."
      />
    </div>
  );
}

export default IdeaTile;
