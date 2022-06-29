import React, { useRef, useImperativeHandle } from "react";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return { focus: activate };
  });

  return (
    <div className={`${props.divClassName}`}>
      <input
        ref={inputRef}
        className={`${props.isValid === false ? "bg-red-300 " : ""} border-2`}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
