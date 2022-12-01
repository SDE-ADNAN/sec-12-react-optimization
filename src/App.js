import React, { useCallback, useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  console.log("APP RUNNING");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]); // useCallback() will only re-create the function if the dependencies change

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  // whenever the showParagraph changes, the component will re-render
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow toggling!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
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

/*
video no. 155 PREVENTING FUNCTION RE-CREATION WITH useCallback()
what does useCallback() do?
1. useCallback() is a hook which returns a memoized version of the callback function that only changes if one of the dependencies has changed.
2. if we pass an empty array as a second argument to useCallback(), it will return a memoized version of the callback function that will never change.
3. we are not needed to pass stateupdating function to useCallback() as a dependency because it is not changing as gauranteed by react.
*/
