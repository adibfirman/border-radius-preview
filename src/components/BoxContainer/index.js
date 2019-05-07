import React from "react";

import { Container, ButtonDrag } from "./styles";

function BoxContainer() {
  const mouseDown = React.useRef(false);
  const rootDom = document.querySelector("#root");
  const btnDragRef = React.useRef();
  const initialY = React.useRef();
  const disabledEvent = () => (mouseDown.current = false);

  React.useEffect(() => {
    rootDom.addEventListener("mousemove", onMouseMoveRootDom);
    rootDom.addEventListener("mouseup", disabledEvent);
    rootDom.addEventListener("mouseleave", disabledEvent);
  }, []);

  function onMouseMoveRootDom(e) {
    if (mouseDown.current) {
      e.preventDefault();

      const btnDom = btnDragRef.current;
      let topNum = e.clientY - initialY.current;
      if (topNum <= 0) topNum = 0;
      if (topNum >= 100) topNum = 100;

      btnDom.style.top = `${topNum}%`;
    }
  }

  function onMouseDown(e) {
    if (e.target === btnDragRef.current) {
      initialY.current = e.clientY;
      mouseDown.current = true;
    }
  }

  return (
    <Container>
      <ButtonDrag ref={btnDragRef} onMouseDown={onMouseDown} />
    </Container>
  );
}

export default BoxContainer;
