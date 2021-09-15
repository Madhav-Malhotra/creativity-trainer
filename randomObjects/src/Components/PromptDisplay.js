import React from "react";

function PromptDisplay(props) {
  const temp = props.generated.items.map(item => {
    const query = item.replace(/ /g, "+");
    return (
      <div className="object col-4 col-sm" key={item}>
        <strong>
          <a
            target={"_blank"}
            href={`http://www.google.com/search?tbm=isch&q=${query}`}
            className="item-link"
          >
            {item}
          </a>
        </strong>
      </div>
    );
  });
  let listObjects = [];
  for (let i = 0; i < temp.length; i++) {
    listObjects.push(temp[i]);
    (i + 1) % 3 === 0
      ? listObjects.push(
          <div
            className="w-100 my-2"
            key={`${Math.random()}_${new Date().getTime()}`}
          />
        )
      : null;
  }

  return (
    <div className="container mt-5" style={props.styles}>
      <h5 className="mb-4">{props.generated.prompt}</h5>
      <div className="row">{listObjects}</div>
      <p className="mt-4">(Click on the items to see what they look like)</p>
    </div>
  );
}

export default PromptDisplay;
