import React from "react";

const Greet = (props) => {
  const {name, charecter} =props
  console.log(props);
  return (
    <div>
      <h1>
        Hello {name} and you are {props.charecter}
      </h1>
      {props.children}
    </div>
  );
};
export default Greet;
