import "./App.css";
import React, { useRef, useState } from "react";
import { Button, Input, TextArea } from "./Components";
import { useCompletes } from "./useCompletes";

function App() {
  const input_ref = React.useRef(null);
  const [text, setText] = useCompletes("");
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
