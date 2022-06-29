import React from "react";

const Input = (props) => {
  return (
    <div className={`${props.divClassName}`}>
      <input
        className={`${
          props.isValid === false ? "bg-red-300 " : ""
        } border-2`}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
