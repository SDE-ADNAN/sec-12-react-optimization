import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false); // when the state changes, the component will re-render
  // whenever the showParagraph changes, the component will re-render
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is New!</p>}
      <Button onClick={() => setShowParagraph(!showParagraph)}>
        Toggle Paragraph!
      </Button>
    </div>
  );
}

export default App;
