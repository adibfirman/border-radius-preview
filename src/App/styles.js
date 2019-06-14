import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border: 2px dashed #9e9e9e;
`;

export const ButtonDrag = styled.div`
  position: absolute;
  width: 1rem;
  height: 1rem;
  background: #fff;
  border: 2px solid black;
  border-radius: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);

  ${({ leftButton }) =>
    leftButton &&
    css`
      top: 100%;
    `}
`;

export const Box = styled.div`
  background: aqua;
  position: absolute;
  width: 100%;
  height: 100%;
`;
