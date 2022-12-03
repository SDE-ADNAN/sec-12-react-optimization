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

/*
video no. 156 useCallback() AND its DEPENDENCIES
1. useCallback() will only re-create the function if the dependencies change.q
2. we must pass values to useCallback() as dependencies which are used in the callback function.
   to let useCallback() know when to re-create the function.( ans. when the dependencies change)
3. functions are closures. so if we use a function inside a component, it will have access to all the variables
    which are in the scope of the component.
4. so therefore its a need to pass all the variables which are used in the callback function to useCallback() as dependencies.
   to help useCallback() to know when to re-create the function. and update the function. with the latest values of the (lexical scope)variables/closure variables .
*/

/*
157 A FIRST SUMMARY

Must watch this video when need a quick revision
topics revised:
1. how react and props work
2. how react forwards all dom related work to reactDOM and then virtualDOM
3. realDOM
4. React.memo()
5. useCallback().
*/

/*
158 A CLOSER LOOK AT STATE AND COMPONENTS

1. components and their interaction with state is core concept of react.
2. as component re-rendering happens only due to state changes, so we must know how state works.
3. state is a special property of a component which can be managed from inside the component.
4. As react is the one who handles all our state with help of useState() hook
   It persists the initial value that we  pass while initializing/using the 
   useState() hook and checks for subsiquent updates whenever the component 
   in which this state is, is re-rendered. It never changes state on its own
   but only updates the state when we call the state updating function.
   and we pass a new value, or else react has the same value which we 
   passed initially or which it got and updated from the previous state update.
5. therefore react only updates state while on-going state-update and components
   rerender cycles when we pass a new state value via stateupdating unction or 
   else it uses the same state which it has stored previously maybe when we initialized
   or may be from the previous state update.
   */

/*
  159 UNDERSTANDING STATE SCHEDULING AND BATCHING

  1. react batches state updates and schedules them to be executed at a later time.
  2. react does this to optimize performance.
  3. react does this to avoid unnecessary re-rendering of components.
  4. react does this to avoid unnecessary re-evaluation of state updating functions.
  5. react does this to avoid unnecessary re-execution of side-effects.
  6. react does this to avoid unnecessary re-execution of expensive calculations.
  7. react does not updates the state immidiately when we call the state updating function.
  8. react updates the state after the current state update cycle is completed this is scheduling
   */

/*
  160 OPTIMIZING WITH USEMEMO()
  1. useMemo() is a hook which returns a memoized value.
  2. useMemo() will only re-compute the memoized value if one of the dependencies has changed.
  3. we can use useMemo() to optimize expensive calculations like sorting array items ,filtering array items etc.
  4. like useCallback() we can pass an empty array as a second argument to useMemo() to tell react to never re-compute the memoized value.
  5. like useCallback() we must pass values to useMemo() as dependencies which are used in the memoized value.
  6. SYNTAX::::
      const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

      const sortedList = useMemo(() => {
        return props.items.sort((a, b) => a - b);
      }, [props.items]);
      
  */
