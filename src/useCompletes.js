import React from "react";
import { useState } from "react";
//파라미터로 initial을 받아오는데 만약 없으면 ""을 할당한다.
export const useCompletes = (initial = "") => {
  // 가져온 ref값으로 state를 바꿔준다.
  const [text, setText] = useState(initial);
  //useState는 전연state가 아니기 때문에 button에 쓰면 상태공유 하기 힘들다.
  const changeText = (_ref) => {
    const value = _ref.current ? _ref.current.value : "";
    if (value && value !== "") {
      setText(value);
      _ref.current.value = "";
    }
  };
  return [text, changeText];
};
