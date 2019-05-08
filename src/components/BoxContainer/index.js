import React from "react";

import { Container, ButtonDrag } from "./styles";

function BoxContainer() {
  const dragActive = React.useRef(false);
  const rootDom = document.querySelector("#root");
  const btnDragRef = React.useRef();
  const currentY = React.useRef();
  const initialY = React.useRef();
  const yOffset = React.useRef(0);

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

      if (position <= 0) position = 0;
      if (position >= 100) position = 100;

      btnDragRef.current.style.top = `${position}%`;
    }
  }

  function endDrag(e) {
    initialY.current = currentY.current;
    disabledEvent();
  }

  return (
    <Container>
      <ButtonDrag ref={btnDragRef} />
    </Container>
  );
}

export default BoxContainer;
