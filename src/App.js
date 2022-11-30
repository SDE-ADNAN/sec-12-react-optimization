import React, { useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  console.log("APP RUNNING");
  const [showParagraph, setShowParagraph] = useState(false); // when the state changes, the component will re-render
  // whenever the showParagraph changes, the component will re-render
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={() => setShowParagraph(!showParagraph)}>
        Toggle Paragraph!
      </Button>
    </div>
  );
}

export default App;
