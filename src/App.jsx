import React, { useState } from "react";
import Body from "./components/Body";

function App(props) {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Mish", age: 20 },
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
    ],
    otherState: "some other value",
  });
  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Big-Mish", age: 19 },
        { name: "Max", age: 30 },
        { name: "Manu", age: 24 },
      ],
    });
  };
  console.log(personsState);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">Hi,I'm a React App</h1>
      <p className='font-semibold'>This is really working!</p>
      <button onClick={switchNameHandler} className="border px-3 " >switch Name</button>
      <Body name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Body name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Body name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default App;
