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

  ${({ topRight }) =>
    topRight &&
    css`
      left: 100%;
    `}
  ${({ bottomLeft }) =>
    bottomLeft &&
    css`
      top: 100%;
    `}
  ${({ bottomRight }) =>
    bottomRight &&
    css`
      top: 100%;
      left: 100%;
    `}
`;

export const Box = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background: linear-gradient(253deg, #e0f2f1, #26a69a, #c10042, #e16f4d);
  background-size: 800% 800%;

  -webkit-animation: AnimationName 14s ease infinite;
  -moz-animation: AnimationName 14s ease infinite;
  -o-animation: AnimationName 14s ease infinite;
  animation: AnimationName 14s ease infinite;

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 86% 0%;
    }
    50% {
      background-position: 15% 100%;
    }
    100% {
      background-position: 86% 0%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 86% 0%;
    }
    50% {
      background-position: 15% 100%;
    }
    100% {
      background-position: 86% 0%;
    }
  }
  @-o-keyframes AnimationName {
    0% {
      background-position: 86% 0%;
    }
    50% {
      background-position: 15% 100%;
    }
    100% {
      background-position: 86% 0%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 86% 0%;
    }
    50% {
      background-position: 15% 100%;
    }
    100% {
      background-position: 86% 0%;
    }
  }
`;
