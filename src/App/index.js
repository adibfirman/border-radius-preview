import React, { useRef, useEffect, createRef, useState } from "react";

import { Container, ButtonDrag, Box } from "./styles";

function App() {
  const [boxWidth, setBoxWidth] = useState(200);

  // --- instance variable ---
  const currentY = useRef(0);
  const currentX = useRef(0);
  const initialY = useRef(0);
  const initialX = useRef(0);

  // --- dom reference ---
  const rootDom = document.querySelector("#root");
  const boxRef = createRef();
  const currDomBtn = createRef();

  const disabledEvent = () => (currDomBtn.current = null);

  useEffect(() => {
    rootDom.addEventListener("mousemove", onDrag);
    rootDom.addEventListener("mouseup", disabledEvent);
    rootDom.addEventListener("mouseleave", disabledEvent);
  }, []);

  function startDrag(e) {
    initialY.current = e.clientY;
    initialX.current = e.clientX;
    currDomBtn.current = e.target;
  }

  function onDrag(e) {
    if (currDomBtn.current) {
      const domBtn = currDomBtn.current;
      const { coor, moveto, negative, border } = domBtn.dataset;
      const position = {
        x: e.clientX - initialX.current,
        y: e.clientY - initialY.current
      };

      currentX.current = position[coor];
      currentY.current = position[coor];

      let currPosition = position[coor];

      if (negative === "true") currPosition += boxWidth;
      if (currPosition >= boxWidth) currPosition = boxWidth;
      if (currPosition <= 0) currPosition = 0;

      domBtn.style[moveto] = `${currPosition}px`;

      // ----------------- calculate the box ----------------------
      const domBox = boxRef.current;
      let reduction = currPosition;
      if (negative === "true") reduction = boxWidth - reduction;

      const calculate = Number((reduction / boxWidth) * 100).toFixed(2);

      domBox.style[border] = `${calculate}%`;
    }
  }

  function onChangeWidth(e) {
    const val = e.target.value;
    setBoxWidth(val || 200);
  }

  return (
    <React.Fragment>
      <Container boxWidth={boxWidth}>
        <Box ref={boxRef} />
        <ButtonDrag
          data-negative="false"
          data-moveto="left"
          data-coor="x"
          onMouseDown={startDrag}
          topLeft
          data-border="border-top-left-radius"
        />
        <ButtonDrag
          data-negative="false"
          data-moveto="top"
          data-coor="y"
          onMouseDown={startDrag}
          topRight
          data-border="border-top-right-radius"
        />
        <ButtonDrag
          data-negative="true"
          data-moveto="left"
          data-coor="x"
          onMouseDown={startDrag}
          bottomRight
          data-border="border-bottom-right-radius"
        />
        <ButtonDrag
          data-negative="true"
          data-moveto="top"
          data-coor="y"
          onMouseDown={startDrag}
          bottomLeft
          data-border="border-bottom-left-radius"
        />
      </Container>
      <input type="number" value={boxWidth} onChange={onChangeWidth} />
    </React.Fragment>
  );
}

export default App;
