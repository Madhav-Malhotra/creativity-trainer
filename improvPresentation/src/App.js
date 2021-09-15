import React, { useState } from "react";
import TopicGenerator from "./Components/TopicGenerator.js";
import RandomImage from "./Components/RandomImage.js";
import defaultImages from "./defaultImages";

export default function App() {
  const [imgs, setImgs] = useState(defaultImages);

  const getImages = () => {
    const url =
      "https://api.unsplash.com/photos/random?client_id=wy6P2lUzf3OiR2hJn61JuJP1Ja3LpU6xsnoqk4pWrDQ&content_filter=high&count=20&orientation=landscape";

    fetch(url)
      .then((res) => {
        if (res.ok) return res;
        else console.error("HTTP-Error: " + res.status);
      })
      .then((res) => res.json())
      .then((data) => {
        let filtered = data.map((img) => {
          const userinfo = {
            name: img.user.name,
            profile: img.user.links.html
          };
          return { link: img.urls.regular, user: userinfo };
        });
        //setImgs(filtered);
        console.log(JSON.stringify(filtered));
      })
      .catch((err) => console.error(err));
  };

  //getImages();

  return (
    <div className="container">
      <div className="App">
        <h1 className="header">Presentations with Random Images</h1>
        <div className="row text-center px-5 py-4">
          <TopicGenerator />
          <RandomImage images={imgs} />
        </div>
      </div>
    </div>
  );
}
