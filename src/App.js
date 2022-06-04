import "./App.css";
import React, { useRef, useState } from "react";
import { Button, Input, TextArea } from "./Components";

function App() {
  const input_ref = React.useRef(null);
  const [text, setText] = React.useState("");
  return (
    <div className="wrap">
      <div>
        <TextArea text={text} />
      </div>
      <div>
        <Input input_ref={input_ref} />
        <Button input_ref={input_ref} setText={setText} />
      </div>
    </div>
  );
}

export default App;
