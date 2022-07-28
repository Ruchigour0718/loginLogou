import React from "react";

const Logout = (props) => {
  return (
    <div>
      <h1>welcome back to Login page </h1>
      <button onClick={props.onClick}>Logout</button>
    </div>
  );
};

export default Logout;
