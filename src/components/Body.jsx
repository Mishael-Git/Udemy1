import React from "react";

function Body(props) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        Hi, I'm {props.name} and I'm {props.age} years old
      </h1>
    </div>
  );
}

export default Body;
