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
      <DemoOutput show={false} />
      <Button onClick={() => setShowParagraph(!showParagraph)}>
        Toggle Paragraph!
      </Button>
    </div>
  );
}

export default App;

/*
In 154 PREVENTING UNNECESSARY RE-RENDERS WITH REACT.MEMO

got to know that 
1. javascript functions are objects.
2. In js two objects are not equal even if they have same properties and values.
3. In js two objects are equal if they are pointing to same memory location.
4. In reaxt we can use React.memo() to prevent re-rendering of a component if its props are not changed.
5. React.memo() is a higher order component.
6. React.memo() is a function which takes a component as an argument and returns a new component.
7. React.memo() tells react to memoize the component and not re-render it if its props are not changed.
8. this works when we pass primitive values as props to a component but not works in caes of
   non-primitive values like objects and arrays.
9. therefore when we pass a function as a prop to a component, and the parent component
   re-renders, the function will be recreated and the child component will be re-rendered
   and in this case react.memo() will not work.

*/
