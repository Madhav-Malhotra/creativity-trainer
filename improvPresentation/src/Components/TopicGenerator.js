import React, { useState } from "react";

function TopicGenerator(props) {
  const [topic, setTopic] = useState(
    randomTopics[Math.floor(Math.random() * randomTopics.length)]
  );
  const [funny, setFunny] = useState(false);

  const handleButtonClick = () => {
    let newTopic;
    do {
      if (!funny)
        newTopic =
          randomTopics[Math.floor(Math.random() * randomTopics.length)];
      else if (funny)
        newTopic = funnyTopics[Math.floor(Math.random() * funnyTopics.length)];
    } while (newTopic === topic);
    setTopic(newTopic);
  };
  const handleSelectClick = (name) => {
    if (name === "funny-topics") {
      if (funny) setFunny(false);
      else setFunny(true);
    }
  };

  return (
    <div className="intro-generator mb-4">
      <p>
        This app generates a random topic for you to present about.
        Unfortunately, your presentation consists entirely of random images.
        Click the generate button to get a new topic or click on the topic to
        learn more about it. Click the next arrow to change presentation slides.
      </p>
      <h5>
        Your current topic is:{" "}
        <a
          href={`http://www.google.com/search?q=${topic.replace(/ /g, "+")}`}
          target="_blank"
        >
          {topic}
        </a>
      </h5>
      <div>
        <button onClick={handleButtonClick}>New topic</button>
        <span className="ml-5 funny-topics">
          <label htmlFor="funny-topics">Funny topics</label>
          <input
            name="funny-topics"
            checked={funny}
            className="ml-2"
            type="checkbox"
            onChange={(e) => handleSelectClick(e.target.name)}
          />
        </span>
      </div>
    </div>
  );
}

export default TopicGenerator;

const randomTopics = [
  "climate change",
  "asian cuisine",
  "italian restaurants",
  "political polarisation",
  "the Great Depression",
  "antivaccination",
  "pandemics",
  "zoo animals",
  "wildlife trafficking",
  "geoengineering",
  "nuclear disarmament",
  "food waste",
  "water desalination",
  "celebrity gossip",
  "children's stories",
  "fake news",
  "psychological biases",
  "genetically modified organisms",
  "cellular agriculture",
  "ancient cave paintings",
  "human evolution",
  "tax policy",
  "popular movies",
  "classical literature",
  "therapeutic animals",
  "coral reef bleaching",
  "depression therapy",
  "justice reform",
  "ethnic enclaves",
  "ethnic enclaves",
  "Apple's latest iPhone",
  "nanotechnology",
  "artificial intelligence",
  "facial recognition",
  "airline overbooking",
  "diversity and inclusion",
  "economic inequality",
  "stock buybacks",
  "ancient Greece",
  "ancient Egypt",
  "Roman conquest",
  "stoic philosophy",
  "learning new languages",
  "web development",
  "satelitte imagery",
  "art and creativity",
  "medieval history",
  "Japanese samurai",
  "Scandinanvian Vikings",
  "World War II",
  "biodiversity loss",
  "ocean acidification",
  "logical fallacies",
  "nuclear safety",
  "biohazard security",
  "drug discovery",
  "quantum computing",
  "blockchain technology",
  "virtual reality",
  "traditional medicine",
  "Renaissance culture",
  "Roman architecture",
  "modern architecture",
  "Newtonian physics",
  "waste management",
  "genetic diseases",
  "factory farming",
  "noise pollution",
  "globalisation",
  "forager societies",
  "industrialisation",
  "railway networks",
  "The Wild West",
  "international diplomacy",
  "modular design",
  "awkward moments in school",
  "weird adventures with friends",
  "favourite shows to binge",
  "boring family dinners",
  "your imaginary friend",
  "that test you flunked",
  "accidents blamed on siblings",
  "vacations that went wrong",
  "your dream job at age 5",
  "are dogs better or cats?",
  "worst teacher in school",
  "your fears as a child",
  "awkward meetings/conversations",
  "most expensive mistakes",
  "what that weird politician said",
  "things you got in trouble for",
  "favourite toy as a child"
];

const funnyTopics = [
  "awkward moments in school",
  "weird adventures with friends",
  "favourite shows to binge",
  "boring family dinners",
  "your imaginary friend",
  "that test you flunked",
  "accidents blamed on siblings",
  "vacations that went wrong",
  "your dream job at age 5",
  "are dogs better or cats?",
  "worst teacher in school",
  "your fears as a child",
  "awkward meetings/conversations",
  "most expensive mistakes",
  "what that weird politician said",
  "things you got in trouble for",
  "favourite toy as a child"
];
