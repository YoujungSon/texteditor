hook은 리액트 컴포넌트 최상위에서만 쓸 수 있다.
1)component.js를 만든다.
2)TextSrea,Input,Button 컴포넌트를 만든다.
3).App에 TextSrea,Input,Button를 가져온다.
4)div로 영역을 나눠준다.
5)Textare에 `<pre>`, Input에 `<input>`, Button에 `<button>`을 만든다.
6)css 변경 7)부모 컴포넌트(App)<에서 입력한 값을 가져오기 위해서 input에 ref값을 먼저 넣어준다.
8)input_ref를 input에 넘겨준다. 9.넘겨준 input_ref를 props로 구조분해할당으로 받아온다.
10)button을 눌렀을 때에도 값을 가져와야 하기 때문에 input_ref를 가져온다.
11)onClick으로 console.log를 찍어서 확인한다.(input_ref.current.value) 12)값을 변경하려면 useState와 useRef로 변경할 수 있다.
13)textArea애 참조할 수 있는 텍스트 값 text를 준다.
14)button에는 변경할 수 있는 값인 setText를 준다.
