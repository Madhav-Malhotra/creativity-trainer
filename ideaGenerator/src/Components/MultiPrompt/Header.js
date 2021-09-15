import React from "react";

function Header(props) {
  return (
    <>
      <div className="row current-ideas header mx-0">
        <div className="col-12">
          <h1 className="text-center">Idea Generator</h1>
        </div>
      </div>
      <div className="row no-gutters nav-select text-center mb-4 mx-0">
        <div className="mode-select col-sm px-0">
          <button onClick={props.handleClick}>Multi-Prompt</button>
        </div>
        <div className="mode-select col-sm px-0">
          <button onClick={props.handleClick}>Single Prompt</button>
        </div>
      </div>
    </>
  );
}

export default Header;
