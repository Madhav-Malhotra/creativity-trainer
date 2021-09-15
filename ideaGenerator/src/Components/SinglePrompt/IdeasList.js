import React from "react";
import IdeaCard from "./IdeaCard";

function IdeasList(props) {
  const listIdeas = props.ideas.map((idea) => {
    return (
      <IdeaCard
        key={Math.random()}
        idea={idea}
        handleClick={props.handleClick}
        handleChange={props.handleChange}
      />
    );
  });

  return <div className="ideas-list ml-4 pb-4">{listIdeas}</div>;
}

export default IdeasList;
