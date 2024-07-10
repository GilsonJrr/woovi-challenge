import styled, { keyframes } from "styled-components";

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #133a6f;
  border-left: 10px solid #133a6f;
  border-bottom: 10px solid #133a6f;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${spin} 1.5s linear infinite;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
