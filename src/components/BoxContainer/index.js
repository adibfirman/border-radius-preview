import React from "react";

import { Container, ButtonDrag } from "./styles";

function BoxContainer() {
  const [position, setPosition] = React.useState(0);
  const mouseDown = React.useRef(false);
  const rootDom = document.querySelector("#root");

  React.useEffect(() => {
    rootDom.addEventListener("mousemove", onMouseMoveRootDom);
    rootDom.addEventListener("mouseup", () => (mouseDown.current = false));
  }, []);

  function handleMouseDown(e) {
    mouseDown.current = true;
    console.log("handleMouseDown");
  }

  function onMouseMoveRootDom(e) {
    if (mouseDown.current) {
      console.log(e.pageY);
    }
  }

  return (
    <Container>
      <ButtonDrag position={position} onMouseDown={handleMouseDown} />
    </Container>
  );
}

export default BoxContainer;
