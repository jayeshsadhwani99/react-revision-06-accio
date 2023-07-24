import { useEffect, useReducer, useRef, useState } from "react";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "Compelete":
      console.log("completed asdjlfbsdjkf");
      return { state: state.state + 1 };
    default:
      console.log("default");
  }
}

const initialState = {
  state: 1,
};

function App() {
  const [name, setName] = useState("Jayesh");
  const inputBox = useRef(null);
  const [data, dispatch] = useReducer(reducer, initialState);

  const changeName = () => {
    // setName("akjsbf");
    dispatch({ type: "Compelete" });
  };

  useEffect(() => {
    console.log("Only the first time");
  }, []);

  useEffect(() => {
    console.log("Name", name);
  }, [name]);

  console.log(inputBox);
  console.log(data);

  return (
    <>
      <div id="output">Hello {name}</div>
      <input type="text" placeholder="Enter your name" ref={inputBox} />
      <button onClick={changeName}>Chnage name</button>
    </>
  );
}

export default App;
