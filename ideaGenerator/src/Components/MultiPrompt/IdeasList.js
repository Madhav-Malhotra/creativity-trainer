import React from "react";
import IdeaTile from "./IdeaTile";

function IdeasList(props) {
  const tiles = props.ideas.map((idea) => {
    return (
      <IdeaTile
        key={idea.id}
        idea={idea}
        handleChange={props.handleChange}
        handleClick={props.handleClick}
        pastIdea={false}
      />
    );
  });

  const visible = props.showIdeas;
  let pastTiles;
  if (visible) {
    pastTiles = props.generatedIdeas.map((idea) => {
      return <IdeaTile key={idea.prompt} idea={idea} pastIdea={true} />;
    });
  }

  return (
    <>
      <div
        className="ideas-list container"
        style={visible ? { display: "none" } : { display: "block" }}
      >
        <div className="row d-flex justify-content-center mb-4">
          {tiles.slice(0, 2)}
        </div>
        <div className="row d-flex justify-content-center mb-4">
          {tiles.slice(2, 4)}
        </div>
      </div>
      <div
        className="past-ideas container"
        style={visible ? { display: "block" } : { display: "none" }}
      >
        <div className="row d-flex justify-content-center mb-4">
          {pastTiles}
        </div>
      </div>
    </>
  );
}

export default IdeasList;
