import React from "react";

import { Container, ButtonDrag, Box } from "./styles";

function App() {
  // --- instance variable ---
  const currentY = React.useRef(0);
  const initialY = React.useRef(0);
  const currentX = React.useRef(0);
  const initialX = React.useRef(0);

  // --- dom reference ---
  const rootDom = document.querySelector("#root");
  const boxRef = React.useRef();
  const currDomBtn = React.useRef();

  const disabledEvent = () => (currDomBtn.current = null);

  React.useEffect(() => {
    rootDom.addEventListener("mousemove", onDrag);
    rootDom.addEventListener("mouseup", endDrag);
    rootDom.addEventListener("mouseleave", disabledEvent);
  }, []);

  function startDrag(e) {
    initialY.current = e.clientY - currentY.current;
    initialX.current = e.clientX - currentX.current;
    currDomBtn.current = e.target;
  }

  function onDrag(e) {
    if (currDomBtn.current) {
      const domBtn = currDomBtn.current;
      const position = {
        x: e.clientX - initialX.current,
        y: e.clientY - initialY.current
      };

      currentY.current = position.y;
      currentX.current = position.x;

      let currPosition = position[domBtn.dataset.coor];

      if (currPosition >= 200) currPosition = 200;
      if (currPosition <= 0) currPosition = 0;

      domBtn.style[domBtn.dataset.moveto] = `${currPosition}px`;

      // ----------------- calculate the box ----------------------
      // const domBox = boxRef.current;
      // const reduction = 200 - position;
      // const calculate = Number((reduction / 200) * 100).toFixed(2);

      // domBox.style.borderRadius = `0 0 0 ${calculate}%`;
    }
  }

  function endDrag(e) {
    initialY.current = currentY.current;
    initialX.current = currentX.current;
    disabledEvent();
  }

  return (
    <Container>
      <Box ref={boxRef} />
      <ButtonDrag data-moveto="left" data-coor="x" onMouseDown={startDrag} />
      <ButtonDrag data-moveto="left" data-coor="x" onMouseDown={startDrag} br />
      <ButtonDrag data-moveto="top" data-coor="y" onMouseDown={startDrag} bl />
      <ButtonDrag data-moveto="top" data-coor="y" onMouseDown={startDrag} tr />
    </Container>
  );
}

export default App;
