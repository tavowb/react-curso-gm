import { useState } from "react";
import "./App.css";
import { Button } from "./components";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Gustavo");

  /*
  Batching is a feature in React that allows multiple state updates to be grouped together,
  so that the component only re-renders once, instead of multiple times for each state update
  This is particularly useful for performance optimization, as it reduces the number of re-renders
  and improves the overall performance of the application.
  
  const countMore = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

*/
  const countMore = () => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  const changeName = () => {
    setName("Daniel");
  };

  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore} />
      <p> {name} </p>
      <Button label="cambiar nombre" parentMethod={changeName} />
    </>
  );
}

export default App;
// This is a simple React application that uses a Button component to display and increment a count.
// The Button component is imported from the components directory, and it takes a label and a method
// to be called when the button is clicked. The count state is managed using the useState hook, and the countMore function increments the count by 1 each time the button is clicked.
