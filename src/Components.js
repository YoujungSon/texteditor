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
        setText(input_ref.current.value);
        input_ref.current.value = "";
      }}
    >
      완성
    </button>
  );
};
