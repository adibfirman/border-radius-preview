import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px dashed #9e9e9e;
`;

export const ButtonDrag = styled.span`
  display: block;
  position: absolute;
  cursor: pointer;
  width: 2.5rem;
  height: 2.5rem;
  transform: translateY(-50%);
  left: -1.4rem;
  top: 100%;

  &:before {
    content: "";
    position: absolute;
    width: 1rem;
    height: 1rem;
    left: 0.75rem;
    top: 0.75rem;
    background: #fff;
    border: 2px solid black;
    transition: 0.2s ease-out;
    border-radius: 50%;
  }
`;

export const Box = styled.div`
  background: aqua;
  position: absolute;
  width: 100%;
  height: 100%;
`;