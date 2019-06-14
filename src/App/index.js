import React from "react";

import { Container, ButtonDrag, Box } from "./styles";

function App() {
  const dragActive = React.useRef(false);
  const rootDom = document.querySelector("#root");
  const btnDragRef = React.useRef();
  const currentY = React.useRef();
  const initialY = React.useRef();
  const yOffset = React.useRef(0);
  const boxRef = React.useRef();

  const disabledEvent = () => (dragActive.current = false);

  React.useEffect(() => {
    rootDom.addEventListener("mousedown", startDrag);
    rootDom.addEventListener("mousemove", onDrag);
    rootDom.addEventListener("mouseup", endDrag);
    rootDom.addEventListener("mouseleave", disabledEvent);
  }, []);

  function startDrag(e) {
    initialY.current = e.clientY - yOffset.current;
    if (e.target === btnDragRef.current) dragActive.current = true;
  }

  function onDrag(e) {
    if (dragActive.current) {
      let position = e.clientY - initialY.current;
      currentY.current = position;
      yOffset.current = position;

      position += 200;

      if (position >= 200) position = 200;
      if (position <= 0) position = 0;

      btnDragRef.current.style.top = `${position}px`;

      // ----------------- calculate the box ----------------------
      const domBox = boxRef.current;
      const reduction = 200 - position;
      const calculate = Number((reduction / 200) * 100).toFixed(2);

      domBox.style.borderRadius = `0 0 0 ${calculate}%`;
    }
  }

  function endDrag(e) {
    initialY.current = currentY.current;
    disabledEvent();
  }

  return (
    <Container>
      <Box ref={boxRef} />
      <ButtonDrag ref={btnDragRef} />
    </Container>
  );
}

export default App;
