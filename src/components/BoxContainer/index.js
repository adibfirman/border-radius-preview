import React from "react";

import { Container, ButtonDrag } from "./styles";

function BoxContainer() {
  const mouseDown = React.useRef(false);

  React.useEffect(() => {
    document
      .querySelector("#root")
      .addEventListener("mouseover", setEventRootDom);
  }, []);

  function handleMouseDown(e) {
    mouseDown.current = true;
    console.log("handleMouseDown");
  }

  function setEventRootDom(e) {
    console.log(e.target, e.relatedTarget);
    console.log("setEventRootDom");
  }

  return (
    <Container>
      <ButtonDrag onMouseDown={handleMouseDown} />
    </Container>
  );
}

export default BoxContainer;
