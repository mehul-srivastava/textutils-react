import React from "react";

function Button(props) {
  return (
    <button
      className={`btn btn-${props.style} mt-3 mx-1`}
      onClick={props.click}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}

export default Button;
