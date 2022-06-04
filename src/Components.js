import React from "react";

export const TextArea = ({ text }) => {
  return (
    <div className="box">
      <pre>{text}</pre>
    </div>
  );
};

export const Input = ({ input_ref }) => {
  return <input ref={input_ref} />;
};

export const Button = ({ input_ref, setText }) => {
  return (
    <button
      onClick={() => {
        setText(input_ref);
      }}
    >
      완성
    </button>
  );
};
