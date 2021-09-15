import React, { useState } from "react";
import Describe from "./Components/Describe/Describe";
import Draw from "./Components/Draw/Draw";

function App() {
  const [drawer, setDrawer] = useState(true);

  const handleClick = (e) => {
    if (e.target.innerText.includes("Describe")) {
      setDrawer(false);
    } else {
      setDrawer(true);
    }
  };

  return (
    <>
      {drawer && <Draw handleClick={handleClick} />}
      {!drawer && <Describe handleClick={handleClick} />}
    </>
  );
}

export default App;
